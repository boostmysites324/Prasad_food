import React, { useState, useEffect, useCallback } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { supabase, isSupabaseReady } from "../../lib/supabaseClient";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [bookings, setBookings] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [outlets, setOutlets] = useState([]);
  const [staff, setStaff] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [reports, setReports] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: ""
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    fullName: ""
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [bookingSyncing, setBookingSyncing] = useState(false);
  const [reservationSyncing, setReservationSyncing] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [reservationError, setReservationError] = useState("");

  // Mock data for bookings
  const mockBookings = [
    {
      id: 1,
      customerName: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      service: "Catering Services",
      eventDate: "2024-02-15",
      eventType: "Wedding Reception",
      guests: 150,
      status: "confirmed",
      message: "Need vegetarian catering for wedding reception",
      createdAt: "2024-01-20"
    },
    {
      id: 2,
      customerName: "Priya Patel",
      email: "priya.patel@email.com",
      phone: "+91 87654 32109",
      service: "Corporate Lunch",
      eventDate: "2024-02-10",
      eventType: "Business Meeting",
      guests: 25,
      status: "pending",
      message: "Corporate lunch for team meeting",
      createdAt: "2024-01-22"
    },
    {
      id: 3,
      customerName: "Amit Kumar",
      email: "amit.kumar@email.com",
      phone: "+91 76543 21098",
      service: "Fine Dining",
      eventDate: "2024-02-08",
      eventType: "Family Dinner",
      guests: 8,
      status: "confirmed",
      message: "Family dinner reservation",
      createdAt: "2024-01-23"
    },
    {
      id: 4,
      customerName: "Neha Singh",
      email: "neha.singh@email.com",
      phone: "+91 65432 10987",
      service: "Festival & Special Events",
      eventDate: "2024-02-20",
      eventType: "Diwali Celebration",
      guests: 50,
      status: "confirmed",
      message: "Diwali celebration with traditional feast",
      createdAt: "2024-01-24"
    }
  ];


  // Mock data for table reservations
  const mockReservations = [
    {
      id: 1,
      customerName: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      outlet: "01 Virar",
      date: "2024-02-15",
      time: "19:00",
      guests: 4,
      specialRequests: "Window seat preferred",
      status: "confirmed",
      createdAt: "2024-01-20"
    },
    {
      id: 2,
      customerName: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      outlet: "06 Thane",
      date: "2024-02-10",
      time: "20:30",
      guests: 2,
      specialRequests: "Vegetarian only",
      status: "pending",
      createdAt: "2024-01-22"
    },
    {
      id: 3,
      customerName: "Amit Patel",
      email: "amit.patel@email.com",
      phone: "+91 76543 21098",
      outlet: "05 Dombivali",
      date: "2024-02-12",
      time: "18:30",
      guests: 6,
      specialRequests: "Family seating arrangement",
      status: "confirmed",
      createdAt: "2024-01-25"
    },
    {
      id: 4,
      customerName: "Neha Gupta",
      email: "neha.gupta@email.com",
      phone: "+91 65432 10987",
      outlet: "09 Vashi",
      date: "2024-02-18",
      time: "21:00",
      guests: 3,
      specialRequests: "Quiet corner table",
      status: "pending",
      createdAt: "2024-01-26"
    }
  ];

  // Mock data for contact form submissions
  const mockContactSubmissions = [
    {
      id: 1,
      type: "reservation",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      outlet: "01 Virar",
      date: "2024-02-15",
      time: "19:00",
      guests: 4,
      specialRequests: "Window seat preferred",
      status: "pending",
      createdAt: "2024-01-20"
    },
    {
      id: 2,
      type: "booking",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      service: "Corporate Lunch",
      eventDate: "2024-02-10",
      eventType: "Business Meeting",
      guests: 25,
      message: "Corporate lunch for team meeting",
      status: "pending",
      createdAt: "2024-01-22"
    }
  ];

  // Mock data for outlets
  const mockOutlets = [
    {
      id: 1,
      name: "01 Virar",
      address: "Shop No. 15, Ground Floor, Virar Station Road, Virar West, Maharashtra - 401303",
      phone: "+91 22 2345 6789",
      email: "virar@prasadfooddivine.com",
      manager: "Rajesh Kumar",
      capacity: 80,
      status: "active",
      rating: 4.4,
      totalBookings: 38
    },
    {
      id: 2,
      name: "02 Badlapur",
      address: "Shop No. 8, First Floor, Badlapur Station Road, Badlapur East, Maharashtra - 421503",
      phone: "+91 22 3456 7890",
      email: "badlapur@prasadfooddivine.com",
      manager: "Priya Sharma",
      capacity: 60,
      status: "active",
      rating: 4.2,
      totalBookings: 25
    },
    {
      id: 3,
      name: "03 Kalyan West",
      address: "Shop No. 12, Ground Floor, Kalyan Station Road, Kalyan West, Maharashtra - 421301",
      phone: "+91 22 4567 8901",
      email: "kalyanwest@prasadfooddivine.com",
      manager: "Amit Patel",
      capacity: 100,
      status: "active",
      rating: 4.6,
      totalBookings: 52
    },
    {
      id: 4,
      name: "04 Kalyan East",
      address: "Shop No. 5, First Floor, Kalyan East Station Road, Kalyan East, Maharashtra - 421306",
      phone: "+91 22 5678 9012",
      email: "kalyaneast@prasadfooddivine.com",
      manager: "Neha Gupta",
      capacity: 75,
      status: "active",
      rating: 4.3,
      totalBookings: 41
    },
    {
      id: 5,
      name: "05 Dombivali",
      address: "Shop No. 20, Ground Floor, Dombivali Station Road, Dombivali East, Maharashtra - 421201",
      phone: "+91 22 6789 0123",
      email: "dombivali@prasadfooddivine.com",
      manager: "Suresh Singh",
      capacity: 90,
      status: "active",
      rating: 4.5,
      totalBookings: 48
    },
    {
      id: 6,
      name: "06 Thane",
      address: "Shop No. 10, First Floor, Thane Station Road, Thane West, Maharashtra - 400601",
      phone: "+91 22 7890 1234",
      email: "thane@prasadfooddivine.com",
      manager: "Kavita Desai",
      capacity: 120,
      status: "active",
      rating: 4.7,
      totalBookings: 65
    },
    {
      id: 7,
      name: "07 Mulund",
      address: "Shop No. 18, Ground Floor, Mulund Station Road, Mulund West, Maharashtra - 400080",
      phone: "+91 22 8901 2345",
      email: "mulund@prasadfooddivine.com",
      manager: "Vikram Mehta",
      capacity: 85,
      status: "active",
      rating: 4.4,
      totalBookings: 44
    },
    {
      id: 8,
      name: "08 Powai",
      address: "Shop No. 25, First Floor, Powai Station Road, Powai, Maharashtra - 400076",
      phone: "+91 22 9012 3456",
      email: "powai@prasadfooddivine.com",
      manager: "Anjali Joshi",
      capacity: 70,
      status: "active",
      rating: 4.8,
      totalBookings: 39
    },
    {
      id: 9,
      name: "09 Vashi",
      address: "Shop No. 30, Ground Floor, Vashi Station Road, Vashi, Navi Mumbai - 400703",
      phone: "+91 22 0123 4567",
      email: "vashi@prasadfooddivine.com",
      manager: "Rahul Verma",
      capacity: 110,
      status: "active",
      rating: 4.6,
      totalBookings: 58
    }
  ];

  // Mock data for staff
  const mockStaff = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Restaurant Manager",
      outlet: "01 Virar",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@prasadfooddivine.com",
      joinDate: "2020-03-15",
      salary: 45000,
      status: "active",
      performance: "Excellent"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Assistant Manager",
      outlet: "02 Badlapur",
      phone: "+91 87654 32109",
      email: "priya.sharma@prasadfooddivine.com",
      joinDate: "2021-06-20",
      salary: 35000,
      status: "active",
      performance: "Good"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Restaurant Manager",
      outlet: "03 Kalyan West",
      phone: "+91 76543 21098",
      email: "amit.patel@prasadfooddivine.com",
      joinDate: "2020-08-10",
      salary: 42000,
      status: "active",
      performance: "Excellent"
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Assistant Manager",
      outlet: "04 Kalyan East",
      phone: "+91 65432 10987",
      email: "neha.gupta@prasadfooddivine.com",
      joinDate: "2021-12-05",
      salary: 32000,
      status: "active",
      performance: "Good"
    },
    {
      id: 5,
      name: "Suresh Singh",
      position: "Restaurant Manager",
      outlet: "05 Dombivali",
      phone: "+91 54321 09876",
      email: "suresh.singh@prasadfooddivine.com",
      joinDate: "2020-11-20",
      salary: 43000,
      status: "active",
      performance: "Excellent"
    }
  ];

  const mapServiceBookingRow = (row) => ({
    id: row.id,
    customerName: row.customer_name,
    email: row.email,
    phone: row.phone,
    service: row.service,
    eventDate: row.event_date,
    eventType: row.event_type,
    guests: row.guests,
    status: row.status,
    message: row.message,
    createdAt: row.created_at
  });

  const mapReservationRow = (row) => ({
    id: row.id,
    customerName: row.name,
    email: row.email,
    phone: row.phone,
    outlet: row.outlet,
    date: row.date,
    time: row.time,
    guests: row.guests,
    specialRequests: row.special_requests,
    status: row.status,
    createdAt: row.created_at
  });

  const fetchServiceBookings = useCallback(async () => {
    if (!isSupabaseReady) {
      console.warn("Supabase is not configured. Using mock bookings data.");
      return;
    }

    setBookingSyncing(true);
    setBookingError("");

    try {
      const { data, error } = await supabase
        .from("service_bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) {
        setBookings(data.map(mapServiceBookingRow));
      }
    } catch (err) {
      console.error("Failed to fetch service bookings:", err);
      setBookingError(err.message || "Unable to load service bookings.");
    } finally {
      setBookingSyncing(false);
    }
  }, [isSupabaseReady]);

  const fetchTableReservations = useCallback(async () => {
    if (!isSupabaseReady) {
      console.warn("Supabase is not configured. Using mock reservation data.");
      return;
    }

    setReservationSyncing(true);
    setReservationError("");

    try {
      const { data, error } = await supabase
        .from("table_reservations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) {
        setReservations(data.map(mapReservationRow));
      }
    } catch (err) {
      console.error("Failed to fetch reservations:", err);
      setReservationError(err.message || "Unable to load reservations.");
    } finally {
      setReservationSyncing(false);
    }
  }, [isSupabaseReady]);

  useEffect(() => {
    setBookings(mockBookings);
    setReservations(mockReservations);
    setOutlets(mockOutlets);
    setStaff(mockStaff);
    
    // Load contact submissions from localStorage
    const storedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setContactSubmissions([...mockContactSubmissions, ...storedSubmissions]);
    
    // Load reservations from localStorage
    const reservationSubmissions = storedSubmissions.filter(sub => sub.type === 'reservation');
    setReservations([...mockReservations, ...reservationSubmissions]);
    
    // Generate comprehensive reports with chart data
    setReports({
      totalRevenue: 185000,
      monthlyBookings: 67,
      customerSatisfaction: 4.6,
      topPerformingOutlet: "06 Thane",
      popularDishes: ["Paneer Tikka Masala", "Dal Makhani", "Gulab Jamun"],
      // Chart data for analytics
      monthlyRevenue: [
        { month: "Jan", revenue: 125000, bookings: 45 },
        { month: "Feb", revenue: 185000, bookings: 67 },
        { month: "Mar", revenue: 165000, bookings: 58 },
        { month: "Apr", revenue: 195000, bookings: 72 },
        { month: "May", revenue: 175000, bookings: 63 },
        { month: "Jun", revenue: 205000, bookings: 78 }
      ],
      outletPerformance: [
        { name: "01 Virar", bookings: 38, revenue: 45000, rating: 4.4 },
        { name: "02 Badlapur", bookings: 25, revenue: 32000, rating: 4.2 },
        { name: "03 Kalyan West", bookings: 52, revenue: 58000, rating: 4.6 },
        { name: "04 Kalyan East", bookings: 41, revenue: 48000, rating: 4.3 },
        { name: "05 Dombivali", bookings: 48, revenue: 52000, rating: 4.5 },
        { name: "06 Thane", bookings: 65, revenue: 72000, rating: 4.7 },
        { name: "07 Mulund", bookings: 44, revenue: 49000, rating: 4.4 },
        { name: "08 Powai", bookings: 39, revenue: 43000, rating: 4.8 },
        { name: "09 Vashi", bookings: 58, revenue: 65000, rating: 4.6 }
      ],
      bookingStatus: [
        { name: "Confirmed", value: 75, color: "#10B981" },
        { name: "Pending", value: 20, color: "#F59E0B" },
        { name: "Cancelled", value: 5, color: "#EF4444" }
      ],
      serviceDistribution: [
        { name: "Fine Dining", value: 30, color: "#3B82F6" },
        { name: "Catering", value: 25, color: "#8B5CF6" },
        { name: "Takeaway", value: 20, color: "#06B6D4" },
        { name: "Corporate", value: 15, color: "#84CC16" },
        { name: "Events", value: 10, color: "#F97316" }
      ],
      dailyBookings: [
        { day: "Mon", bookings: 12, reservations: 8 },
        { day: "Tue", bookings: 15, reservations: 10 },
        { day: "Wed", bookings: 18, reservations: 12 },
        { day: "Thu", bookings: 22, reservations: 15 },
        { day: "Fri", bookings: 25, reservations: 18 },
        { day: "Sat", bookings: 30, reservations: 22 },
        { day: "Sun", bookings: 28, reservations: 20 }
      ]
    });
  }, []);

  useEffect(() => {
    fetchServiceBookings();
    fetchTableReservations();
  }, [fetchServiceBookings, fetchTableReservations]);

  // Authentication
  const handleLogin = (e) => {
    e.preventDefault();
    const storedAdmins = JSON.parse(localStorage.getItem('adminUsers') || '[]');
    const admin = storedAdmins.find(admin => 
      admin.username === adminCredentials.username && admin.password === adminCredentials.password
    );
    
    if (admin) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      localStorage.setItem("currentAdmin", JSON.stringify(admin));
    } else {
      alert("Invalid credentials! Please check your username and password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (registerData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    
    const storedAdmins = JSON.parse(localStorage.getItem('adminUsers') || '[]');
    const existingAdmin = storedAdmins.find(admin => admin.username === registerData.username);
    
    if (existingAdmin) {
      alert("Username already exists! Please choose a different username.");
      return;
    }
    
    const newAdmin = {
      id: Date.now(),
      username: registerData.username,
      password: registerData.password,
      email: registerData.email,
      fullName: registerData.fullName,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    storedAdmins.push(newAdmin);
    localStorage.setItem('adminUsers', JSON.stringify(storedAdmins));
    
    alert("Registration successful! You can now login with your credentials.");
    setShowRegister(false);
    setShowLogin(true);
    setRegisterData({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      fullName: ""
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("currentAdmin");
    setAdminCredentials({ username: "", password: "" });
    setShowLogin(true);
    setShowRegister(false);
  };

  useEffect(() => {
    // Initialize default admin if no users exist
    const storedAdmins = JSON.parse(localStorage.getItem('adminUsers') || '[]');
    if (storedAdmins.length === 0) {
      const defaultAdmin = {
        id: 1,
        username: "admin",
        password: "admin123",
        email: "admin@prasadfooddivine.com",
        fullName: "System Administrator",
        createdAt: new Date().toISOString().split('T')[0]
      };
      localStorage.setItem('adminUsers', JSON.stringify([defaultAdmin]));
    }
    
    const auth = localStorage.getItem("adminAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Booking management
  const updateBookingStatus = async (bookingId, newStatus) => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );

    if (!isSupabaseReady) return;

    const { error } = await supabase
      .from("service_bookings")
      .update({ status: newStatus })
      .eq("id", bookingId);

    if (error) {
      console.error("Failed to update booking status:", error);
      alert("Failed to update booking status. Please try again.");
      fetchServiceBookings();
    }
  };

  const deleteBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) {
      return;
    }

    setBookings(prev => prev.filter(booking => booking.id !== bookingId));

    if (!isSupabaseReady) return;

    const { error } = await supabase
      .from("service_bookings")
      .delete()
      .eq("id", bookingId);

    if (error) {
      console.error("Failed to delete booking:", error);
      alert("Failed to delete booking. Please try again.");
      fetchServiceBookings();
    }
  };

  // Contact form management
  const updateContactStatus = (submissionId, newStatus) => {
    const updatedSubmissions = contactSubmissions.map(submission => 
      submission.id === submissionId ? { ...submission, status: newStatus } : submission
    );
    setContactSubmissions(updatedSubmissions);
    
    // Update localStorage
    const storedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const updatedStored = storedSubmissions.map(submission => 
      submission.id === submissionId ? { ...submission, status: newStatus } : submission
    );
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedStored));
  };

  const deleteContactSubmission = (submissionId) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      const updatedSubmissions = contactSubmissions.filter(submission => submission.id !== submissionId);
      setContactSubmissions(updatedSubmissions);
      
      // Update localStorage
      const storedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const updatedStored = storedSubmissions.filter(submission => submission.id !== submissionId);
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedStored));
    }
  };

  const refreshContactSubmissions = () => {
    const storedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setContactSubmissions([...mockContactSubmissions, ...storedSubmissions]);
  };

  // Outlet management
  const updateOutlet = (outletId, updatedData) => {
    setOutlets(outlets.map(outlet => 
      outlet.id === outletId ? { ...outlet, ...updatedData } : outlet
    ));
  };

  const deleteOutlet = (outletId) => {
    if (window.confirm("Are you sure you want to delete this outlet?")) {
      setOutlets(outlets.filter(outlet => outlet.id !== outletId));
    }
  };

  // Staff management
  const updateStaff = (staffId, updatedData) => {
    setStaff(staff.map(member => 
      member.id === staffId ? { ...member, ...updatedData } : member
    ));
  };

  const deleteStaff = (staffId) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      setStaff(staff.filter(member => member.id !== staffId));
    }
  };

  const updateReservationStatus = async (reservationId, newStatus) => {
    setReservations(prev =>
      prev.map(reservation =>
        reservation.id === reservationId ? { ...reservation, status: newStatus } : reservation
      )
    );

    if (!isSupabaseReady) return;

    const { error } = await supabase
      .from("table_reservations")
      .update({ status: newStatus })
      .eq("id", reservationId);

    if (error) {
      console.error("Failed to update reservation status:", error);
      alert("Failed to update reservation status. Please try again.");
      fetchTableReservations();
    }
  };

  const deleteReservation = async (reservationId) => {
    if (!window.confirm("Are you sure you want to delete this reservation?")) {
      return;
    }

    setReservations(prev => prev.filter(reservation => reservation.id !== reservationId));

    if (!isSupabaseReady) return;

    const { error } = await supabase
      .from("table_reservations")
      .delete()
      .eq("id", reservationId);

    if (error) {
      console.error("Failed to delete reservation:", error);
      alert("Failed to delete reservation. Please try again.");
      fetchTableReservations();
    }
  };

  // Filter and search functions
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || booking.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.eventDate) - new Date(a.eventDate);
      case "name":
        return a.customerName.localeCompare(b.customerName);
      case "status":
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.outlet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || reservation.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const sortedReservations = [...filteredReservations].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "name":
        return a.customerName.localeCompare(b.customerName);
      case "outlet":
        return a.outlet.localeCompare(b.outlet);
      default:
        return 0;
    }
  });

  // Statistics
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const pendingBookings = bookings.filter(b => b.status === "pending").length;
  const totalReservations = reservations.length;
  const confirmedReservations = reservations.filter(r => r.status === "confirmed").length;
  const totalOutlets = outlets.length;
  const totalStaff = staff.length;
  const totalContactSubmissions = contactSubmissions.length;
  const pendingSubmissions = contactSubmissions.filter(s => s.status === "pending").length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFFDD0] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-[#800000] mb-2">Admin Panel</h1>
            <p className="text-gray-600">Prasad Food Divine</p>
          </div>
          
          {/* Login Form */}
          {showLogin && (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={adminCredentials.username}
                  onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={adminCredentials.password}
                  onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Login
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                  className="text-[#800000] hover:text-[#FF9933] text-sm font-medium"
                >
                  Don't have an account? Register here
                </button>
              </div>
            </form>
          )}
          
          {/* Registration Form */}
          {showRegister && (
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={registerData.fullName}
                  onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#800000] hover:bg-[#600000] text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Register
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                  }}
                  className="text-[#800000] hover:text-[#FF9933] text-sm font-medium"
                >
                  Already have an account? Login here
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Default Admin Credentials:</p>
            <p>Username: admin</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#800000] text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-serif">Admin Panel</h1>
              <p className="text-sm opacity-90">Prasad Food Divine</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                Welcome, {JSON.parse(localStorage.getItem('currentAdmin') || '{}').fullName || 'Admin'}
              </span>
              <button
                onClick={handleLogout}
                className="bg-[#FF9933] hover:bg-[#e88a2a] px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              {[
                { id: "dashboard", name: "Dashboard", icon: "fa-tachometer-alt" },
                { id: "bookings", name: "Service Bookings", icon: "fa-calendar-check" },
                { id: "reservations", name: "Table Reservations", icon: "fa-table" },
                { id: "contact", name: "Contact Submissions", icon: "fa-envelope" },
                { id: "outlets", name: "Outlet Management", icon: "fa-store" },
                { id: "staff", name: "Staff Management", icon: "fa-user-tie" },
                { id: "reports", name: "Reports & Analytics", icon: "fa-chart-bar" },
                { id: "settings", name: "Settings", icon: "fa-cog" }
              ].map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      activeTab === tab.id
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <i className={`fas ${tab.icon} mr-3`}></i>
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-3xl font-serif text-[#800000] mb-8">Dashboard</h2>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <i className="fas fa-calendar-check text-blue-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Service Bookings</p>
                      <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-full">
                      <i className="fas fa-table text-green-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Table Reservations</p>
                      <p className="text-2xl font-bold text-gray-900">{totalReservations}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <i className="fas fa-envelope text-yellow-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Contact Submissions</p>
                      <p className="text-2xl font-bold text-gray-900">{totalContactSubmissions}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <i className="fas fa-user-tie text-purple-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Staff Members</p>
                      <p className="text-2xl font-bold text-gray-900">{totalStaff}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Monthly Revenue Trend */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Monthly Revenue Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={reports.monthlyRevenue}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                      <Area type="monotone" dataKey="revenue" stroke="#FF9933" fill="#FF9933" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Daily Bookings */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Daily Bookings</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={reports.dailyBookings}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bookings" fill="#3B82F6" name="Service Bookings" />
                      <Bar dataKey="reservations" fill="#10B981" name="Table Reservations" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-serif text-[#800000] mb-4">Recent Bookings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Customer</th>
                        <th className="text-left py-3 px-4">Service</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.slice(0, 5).map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{booking.customerName}</p>
                              <p className="text-sm text-gray-600">{booking.email}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">{booking.service}</td>
                          <td className="py-3 px-4">{booking.eventDate}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === "confirmed" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Bookings Management */}
          {activeTab === "bookings" && (
            <div>
              <h2 className="text-3xl font-serif text-[#800000] mb-8">Service Bookings Management</h2>

              {bookingError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  {bookingError}
                </div>
              )}
              
              {/* Search and Filter Controls */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <input
                      type="text"
                      placeholder="Search by name, email, or service..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    >
                      <option value="date">Date</option>
                      <option value="name">Name</option>
                      <option value="status">Status</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterStatus("all");
                        setSortBy("date");
                        fetchServiceBookings();
                      }}
                      className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-70"
                      disabled={bookingSyncing}
                    >
                      <i className={`fas ${bookingSyncing ? "fa-spinner fa-spin" : "fa-refresh"} mr-2`}></i>
                      {bookingSyncing ? "Syncing..." : "Reset & Sync"}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6">Customer</th>
                        <th className="text-left py-4 px-6">Service</th>
                        <th className="text-left py-4 px-6">Event Date</th>
                        <th className="text-left py-4 px-6">Guests</th>
                        <th className="text-left py-4 px-6">Status</th>
                        <th className="text-left py-4 px-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedBookings.length > 0 ? (
                        sortedBookings.map((booking) => (
                          <tr key={booking.id} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6">
                              <div>
                                <p className="font-medium">{booking.customerName}</p>
                                <p className="text-sm text-gray-600">{booking.email}</p>
                                <p className="text-sm text-gray-600">{booking.phone}</p>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div>
                                <p className="font-medium">{booking.service}</p>
                                <p className="text-sm text-gray-600">{booking.eventType}</p>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center">
                                <i className="fas fa-calendar text-gray-400 mr-2"></i>
                                {booking.eventDate}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                                {booking.guests} guests
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <select
                                value={booking.status}
                                onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                                className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                                  booking.status === "confirmed" 
                                    ? "bg-green-100 text-green-800 border-green-200" 
                                    : booking.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                    : "bg-red-100 text-red-800 border-red-200"
                                }`}
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => {
                                    alert(`Booking Details:\nCustomer: ${booking.customerName}\nEmail: ${booking.email}\nPhone: ${booking.phone}\nService: ${booking.service}\nEvent Type: ${booking.eventType}\nDate: ${booking.eventDate}\nGuests: ${booking.guests}\nMessage: ${booking.message}`);
                                  }}
                                  className="text-blue-600 hover:text-blue-800 transition-colors"
                                  title="View Details"
                                >
                                  <i className="fas fa-eye"></i>
                                </button>
                                <button
                                  onClick={() => deleteBooking(booking.id)}
                                  className="text-red-600 hover:text-red-800 transition-colors"
                                  title="Delete Booking"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="py-8 text-center text-gray-500">
                            <i className="fas fa-search text-4xl mb-4"></i>
                            <p>No bookings found matching your criteria</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Table Reservations */}
          {activeTab === "reservations" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif text-[#800000]">Table Reservations</h2>
                <button
                  onClick={fetchTableReservations}
                  disabled={reservationSyncing}
                  className="bg-[#FF9933] hover:bg-[#e88a2a] disabled:bg-[#d47520] text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  <i className={`fas ${reservationSyncing ? "fa-spinner fa-spin" : "fa-sync-alt"} mr-2`}></i>
                  {reservationSyncing ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {reservationError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  {reservationError}
                </div>
              )}
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6">Customer</th>
                        <th className="text-left py-4 px-6">Outlet</th>
                        <th className="text-left py-4 px-6">Date & Time</th>
                        <th className="text-left py-4 px-6">Guests</th>
                        <th className="text-left py-4 px-6">Special Requests</th>
                        <th className="text-left py-4 px-6">Status</th>
                        <th className="text-left py-4 px-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservations.length > 0 ? (
                        reservations.map((reservation) => (
                          <tr key={reservation.id} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6">
                              <div>
                                <p className="font-medium">{reservation.customerName || reservation.name}</p>
                                <p className="text-sm text-gray-600">{reservation.email}</p>
                                <p className="text-sm text-gray-600">{reservation.phone}</p>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                                {reservation.outlet}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center">
                                <i className="fas fa-calendar text-gray-400 mr-2"></i>
                                <div>
                                  <p className="font-medium">{reservation.date}</p>
                                  <p className="text-sm text-gray-600">{reservation.time}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                {reservation.guests} guests
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <p className="text-sm text-gray-600 max-w-xs truncate">
                                {reservation.specialRequests || 'None'}
                              </p>
                            </td>
                            <td className="py-4 px-6">
                              <select
                                value={reservation.status}
                                onChange={(e) => updateReservationStatus(reservation.id, e.target.value)}
                                className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                                  reservation.status === "confirmed" 
                                    ? "bg-green-100 text-green-800 border-green-200" 
                                    : reservation.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                    : "bg-red-100 text-red-800 border-red-200"
                                }`}
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => {
                                    alert(`Reservation Details:\nCustomer: ${reservation.customerName || reservation.name}\nEmail: ${reservation.email}\nPhone: ${reservation.phone}\nOutlet: ${reservation.outlet}\nDate: ${reservation.date}\nTime: ${reservation.time}\nGuests: ${reservation.guests}\nSpecial Requests: ${reservation.specialRequests || 'None'}`);
                                  }}
                                  className="text-blue-600 hover:text-blue-800 transition-colors"
                                  title="View Details"
                                >
                                  <i className="fas fa-eye"></i>
                                </button>
                                <button
                                  onClick={() => deleteReservation(reservation.id)}
                                  className="text-red-600 hover:text-red-800 transition-colors"
                                  title="Delete"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="py-8 text-center text-gray-500">
                            <i className="fas fa-table text-4xl mb-4"></i>
                            <p>No reservations found</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Reports & Analytics */}
          {activeTab === "reports" && (
            <div>
              <h2 className="text-3xl font-serif text-[#800000] mb-8">Reports & Analytics</h2>
              
              {/* Key Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-20 rounded-full">
                      <i className="fas fa-rupee-sign text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm opacity-90">Total Revenue</p>
                      <p className="text-2xl font-bold">₹{reports.totalRevenue?.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-20 rounded-full">
                      <i className="fas fa-calendar-check text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm opacity-90">Monthly Bookings</p>
                      <p className="text-2xl font-bold">{reports.monthlyBookings}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-20 rounded-full">
                      <i className="fas fa-star text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm opacity-90">Customer Satisfaction</p>
                      <p className="text-2xl font-bold">{reports.customerSatisfaction} ⭐</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-20 rounded-full">
                      <i className="fas fa-store text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm opacity-90">Top Outlet</p>
                      <p className="text-lg font-bold">{reports.topPerformingOutlet}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Analytics Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Trend Analysis */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Revenue Trend Analysis</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={reports.monthlyRevenue}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#FF9933" strokeWidth={3} name="Revenue" />
                      <Line type="monotone" dataKey="bookings" stroke="#3B82F6" strokeWidth={3} name="Bookings" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Outlet Performance Comparison */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Outlet Performance Comparison</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={reports.outletPerformance.slice(0, 6)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [name === "revenue" ? `₹${value.toLocaleString()}` : value, name]} />
                      <Legend />
                      <Bar dataKey="rating" fill="#10B981" name="Rating" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detailed Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Booking Status Distribution */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Booking Status</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={reports.bookingStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {reports.bookingStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Service Distribution */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Service Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={reports.serviceDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {reports.serviceDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Weekly Performance */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif text-[#800000] mb-4">Weekly Performance</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={reports.dailyBookings}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="bookings" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="reservations" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Contact Submissions */}
          {activeTab === "contact" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif text-[#800000]">Contact Form Submissions</h2>
                        <button
                  onClick={refreshContactSubmissions}
                  className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  <i className="fas fa-sync-alt mr-2"></i>Refresh
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6">Type</th>
                        <th className="text-left py-4 px-6">Customer</th>
                        <th className="text-left py-4 px-6">Details</th>
                        <th className="text-left py-4 px-6">Date/Time</th>
                        <th className="text-left py-4 px-6">Status</th>
                        <th className="text-left py-4 px-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactSubmissions.map((submission) => (
                        <tr key={submission.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              submission.type === "reservation" 
                                ? "bg-blue-100 text-blue-800" 
                                : submission.type === "booking"
                              ? "bg-green-100 text-green-800" 
                                : submission.type === "franchise"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-orange-100 text-orange-800"
                            }`}>
                              {submission.type === "reservation" ? "Table Reservation" : 
                               submission.type === "booking" ? "Service Booking" :
                               submission.type === "franchise" ? "Franchise Inquiry" : "Career Application"}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-medium">{submission.name}</p>
                              <p className="text-sm text-gray-600">{submission.email}</p>
                              <p className="text-sm text-gray-600">{submission.phone}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="text-sm">
                              {submission.type === "reservation" ? (
                                <>
                                  <p><strong>Outlet:</strong> {submission.outlet}</p>
                                  <p><strong>Guests:</strong> {submission.guests}</p>
                                  {submission.specialRequests && (
                                    <p><strong>Requests:</strong> {submission.specialRequests}</p>
                                  )}
                                </>
                              ) : submission.type === "booking" ? (
                                <>
                                  <p><strong>Service:</strong> {submission.service}</p>
                                  <p><strong>Event:</strong> {submission.eventType}</p>
                                  <p><strong>Guests:</strong> {submission.guests}</p>
                                  {submission.message && (
                                    <p><strong>Message:</strong> {submission.message}</p>
                                  )}
                                </>
                              ) : submission.type === "franchise" ? (
                                <>
                                  <p><strong>City:</strong> {submission.city}</p>
                                  <p><strong>Investment:</strong> {submission.investment}</p>
                                  <p><strong>Timeline:</strong> {submission.timeline}</p>
                                  <p><strong>Background:</strong> {submission.background}</p>
                                  {submission.message && (
                                    <p><strong>Message:</strong> {submission.message}</p>
                                  )}
                                </>
                              ) : (
                                <>
                                  <p><strong>Position:</strong> {submission.currentPosition}</p>
                                  <p><strong>Company:</strong> {submission.company}</p>
                                  <p><strong>Location:</strong> {submission.location}</p>
                                  <p><strong>Education:</strong> {submission.degree} - {submission.institution}</p>
                                  {submission.additionalInfo && (
                                    <p><strong>Additional Info:</strong> {submission.additionalInfo}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="text-sm">
                              <p><strong>Date:</strong> {submission.date || submission.eventDate}</p>
                              {submission.time && <p><strong>Time:</strong> {submission.time}</p>}
                              <p className="text-gray-500">Submitted: {submission.createdAt}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <select
                              value={submission.status}
                              onChange={(e) => updateContactStatus(submission.id, e.target.value)}
                              className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                                submission.status === "confirmed" 
                                  ? "bg-green-100 text-green-800 border-green-200" 
                                  : submission.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                  : "bg-red-100 text-red-800 border-red-200"
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  let details = `Submission Details:\nType: ${submission.type}\nName: ${submission.name}\nEmail: ${submission.email}\nPhone: ${submission.phone}\n`;
                                  
                                  if (submission.type === "reservation") {
                                    details += `Outlet: ${submission.outlet}\nDate: ${submission.date}\nTime: ${submission.time}\nGuests: ${submission.guests}\nSpecial Requests: ${submission.specialRequests || "None"}`;
                                  } else if (submission.type === "booking") {
                                    details += `Service: ${submission.service}\nEvent Type: ${submission.eventType}\nEvent Date: ${submission.eventDate}\nGuests: ${submission.guests}\nMessage: ${submission.message || "None"}`;
                                  } else if (submission.type === "franchise") {
                                    details += `City: ${submission.city}\nInvestment: ${submission.investment}\nTimeline: ${submission.timeline}\nBackground: ${submission.background}\nMessage: ${submission.message || "None"}`;
                                  } else if (submission.type === "career") {
                                    details += `Position: ${submission.currentPosition}\nCompany: ${submission.company}\nLocation: ${submission.location}\nEducation: ${submission.degree} - ${submission.institution}\nAdditional Info: ${submission.additionalInfo || "None"}`;
                                  }
                                  
                                  alert(details);
                                }}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                title="View Details"
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                              <button
                                onClick={() => deleteContactSubmission(submission.id)}
                                className="text-red-600 hover:text-red-800 transition-colors"
                                title="Delete Submission"
                              >
                                <i className="fas fa-trash"></i>
                        </button>
                      </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                    </div>
              </div>
            </div>
          )}

          {/* Outlet Management */}
          {activeTab === "outlets" && (
            <div>
              <h2 className="text-3xl font-serif text-[#800000] mb-8">Outlet Management</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6">Outlet Name</th>
                        <th className="text-left py-4 px-6">Address</th>
                        <th className="text-left py-4 px-6">Manager</th>
                        <th className="text-left py-4 px-6">Capacity</th>
                        <th className="text-left py-4 px-6">Rating</th>
                        <th className="text-left py-4 px-6">Bookings</th>
                        <th className="text-left py-4 px-6">Status</th>
                        <th className="text-left py-4 px-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {outlets.map((outlet) => (
                        <tr key={outlet.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-medium">{outlet.name}</p>
                              <p className="text-sm text-gray-600">{outlet.phone}</p>
                              <p className="text-sm text-gray-600">{outlet.email}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm max-w-xs">{outlet.address}</p>
                          </td>
                          <td className="py-4 px-6">
                            <p className="font-medium">{outlet.manager}</p>
                          </td>
                          <td className="py-4 px-6">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                              {outlet.capacity} seats
                          </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center">
                              <span className="text-yellow-500 mr-1">⭐</span>
                              <span className="font-medium">{outlet.rating}</span>
                      </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              {outlet.totalBookings} bookings
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              outlet.status === "active" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-red-100 text-red-800"
                            }`}>
                              {outlet.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                                  const newStatus = outlet.status === "active" ? "inactive" : "active";
                                  updateOutlet(outlet.id, { status: newStatus });
                                }}
                                className={`px-3 py-1 rounded text-xs ${
                                  outlet.status === "active" 
                                    ? "bg-red-100 text-red-800 hover:bg-red-200" 
                                    : "bg-green-100 text-green-800 hover:bg-green-200"
                                }`}
                              >
                                {outlet.status === "active" ? "Deactivate" : "Activate"}
                              </button>
                              <button
                                onClick={() => {
                                  const newManager = prompt("Enter new manager name:", outlet.manager);
                                  if (newManager) {
                                    updateOutlet(outlet.id, { manager: newManager });
                            }
                          }}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                                <i className="fas fa-edit"></i>
                        </button>
                        <button
                                onClick={() => deleteOutlet(outlet.id)}
                                className="text-red-600 hover:text-red-800 transition-colors"
                                title="Delete Outlet"
                        >
                                <i className="fas fa-trash"></i>
                        </button>
                      </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                    </div>
                  </div>
              
              <div className="mt-8">
                <button className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-3 rounded-md font-medium transition-colors">
                  <i className="fas fa-plus mr-2"></i> Add New Outlet
                </button>
              </div>
            </div>
          )}

          {/* Staff Management */}
          {activeTab === "staff" && (
            <div>
              <h2 className="text-3xl font-serif text-[#800000] mb-8">Staff Management</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6">Staff Member</th>
                        <th className="text-left py-4 px-6">Position</th>
                        <th className="text-left py-4 px-6">Outlet</th>
                        <th className="text-left py-4 px-6">Contact</th>
                        <th className="text-left py-4 px-6">Join Date</th>
                        <th className="text-left py-4 px-6">Salary</th>
                        <th className="text-left py-4 px-6">Performance</th>
                        <th className="text-left py-4 px-6">Status</th>
                        <th className="text-left py-4 px-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staff.map((member) => (
                        <tr key={member.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-gray-600">ID: {member.id}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                              {member.position}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <p className="font-medium">{member.outlet}</p>
                          </td>
                          <td className="py-4 px-6">
                            <div className="text-sm">
                              <p>{member.phone}</p>
                              <p className="text-gray-600">{member.email}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm">{member.joinDate}</p>
                          </td>
                          <td className="py-4 px-6">
                            <p className="font-medium">₹{member.salary.toLocaleString()}</p>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              member.performance === "Excellent" 
                                ? "bg-green-100 text-green-800" 
                                : member.performance === "Good"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}>
                              {member.performance}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              member.status === "active" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-red-100 text-red-800"
                            }`}>
                              {member.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  const newStatus = member.status === "active" ? "inactive" : "active";
                                  updateStaff(member.id, { status: newStatus });
                                }}
                                className={`px-3 py-1 rounded text-xs ${
                                  member.status === "active" 
                                    ? "bg-red-100 text-red-800 hover:bg-red-200" 
                                    : "bg-green-100 text-green-800 hover:bg-green-200"
                                }`}
                              >
                                {member.status === "active" ? "Deactivate" : "Activate"}
                              </button>
                              <button
                                onClick={() => {
                                  const newSalary = prompt("Enter new salary:", member.salary);
                                  if (newSalary && !isNaN(newSalary)) {
                                    updateStaff(member.id, { salary: parseInt(newSalary) });
                                  }
                                }}
                                className="text-blue-600 hover:text-blue-800 text-sm"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                onClick={() => deleteStaff(member.id)}
                                className="text-red-600 hover:text-red-800 transition-colors"
                                title="Delete Staff Member"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-3 rounded-md font-medium transition-colors">
                  <i className="fas fa-plus mr-2"></i> Add New Staff Member
                </button>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div>
              <h2 className="text-3xl font-serif text-[#800000] mb-8">Settings</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-serif text-[#800000] mb-4">Website Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website Title</label>
                    <input
                      type="text"
                      defaultValue="Prasad Food Divine"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="info@prasadfooddivine.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      rows="3"
                      defaultValue="123, Food Street, Culinary District, City - 123456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
