# Prasad Food Divine - Admin Panel

## Overview
The admin panel provides comprehensive management capabilities for the Prasad Food Divine website, including booking management and photo management features.

## Access
- **URL**: `/admin`
- **Demo Credentials**:
  - Username: `admin`
  - Password: `admin123`

## Features

### 🔐 Authentication
- Secure login system with session management
- Automatic logout functionality
- Session persistence using localStorage

### 📊 Dashboard
- **Comprehensive Statistics Overview**:
  - Service bookings count
  - Table reservations count
  - Total customers
  - Active outlets
  - Staff members
  - Menu items
  - Active photos
  - Monthly revenue
- **Real-time data updates** and visual indicators

### 📅 Service Bookings Management
- **View All Service Bookings**: Complete list of all customer service bookings
- **Booking Details**: Customer information, service type, event details
- **Status Management**: Update booking status (Pending, Confirmed, Cancelled)
- **Actions**:
  - View booking details
  - Delete bookings
  - Update booking status in real-time

### 🍽️ Table Reservations Management
- **View All Table Reservations**: Complete list of all table reservations
- **Reservation Details**: Customer information, outlet, date/time, guests
- **Outlet Selection**: Track reservations by specific outlets
- **Status Management**: Update reservation status
- **Special Requests**: View and manage customer special requests

### 👥 Customers Management
- **Customer Database**: Complete customer information
- **Booking History**: Track total bookings and spending
- **Customer Preferences**: View dietary and seating preferences
- **Last Visit Tracking**: Monitor customer engagement
- **Status Management**: Active/inactive customer status

### 🏪 Outlets Management
- **Outlet Information**: Name, address, contact details
- **Manager Assignment**: Track outlet managers
- **Capacity Management**: Monitor seating capacity
- **Performance Metrics**: Ratings and booking statistics
- **Status Tracking**: Active/inactive outlet status



### 👨‍💼 Staff Management
- **Staff Database**: Complete staff information
- **Position Tracking**: Role and outlet assignment
- **Performance Monitoring**: Track staff performance ratings
- **Join Date Tracking**: Monitor staff tenure
- **Contact Management**: Staff contact information

### 📈 Reports & Analytics
- **Revenue Overview**: Total revenue and monthly trends
- **Performance Metrics**: Customer satisfaction and outlet performance
- **Popular Dishes**: Track most ordered items
- **Booking Analytics**: Monthly booking statistics
- **Customer Insights**: Customer behavior analysis

### 🖼️ Photo Management
- **Photo Gallery**: Visual grid of all website photos
- **Photo Information**: Title, category, tags, and status
- **Photo Actions**:
  - Toggle photo active/inactive status
  - Edit photo titles and details
  - Delete photos
  - Add new photos (button ready for implementation)

### ⚙️ Settings
- **Website Configuration**:
  - Website title
  - Contact email
  - Phone number
  - Address
- **Save functionality** ready for backend integration

## Technical Implementation

### Frontend Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Updates**: Changes reflect immediately in the UI
- **Mock Data**: Sample bookings and photos for demonstration
- **Form Validation**: Input validation and error handling

### Data Structure

#### Service Booking Object
```javascript
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
}
```

#### Table Reservation Object
```javascript
{
  id: 1,
  customerName: "Rajesh Kumar",
  email: "rajesh.kumar@email.com",
  phone: "+91 98765 43210",
  outlet: "Main Branch - Connaught Place",
  date: "2024-02-15",
  time: "19:00",
  guests: 4,
  specialRequests: "Window seat preferred",
  status: "confirmed",
  createdAt: "2024-01-20"
}
```

#### Customer Object
```javascript
{
  id: 1,
  name: "Rahul Sharma",
  email: "rahul.sharma@email.com",
  phone: "+91 98765 43210",
  totalBookings: 5,
  totalSpent: 15000,
  lastVisit: "2024-01-15",
  status: "active",
  preferences: ["Vegetarian", "Spicy food", "Window seating"]
}
```

#### Outlet Object
```javascript
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
}
```



#### Staff Member Object
```javascript
{
  id: 1,
  name: "Amit Singh",
  position: "Restaurant Manager",
  outlet: "Main Branch - Connaught Place",
  phone: "+91 98765 43210",
  email: "amit.singh@prasadfooddivine.com",
  joinDate: "2020-03-15",
  salary: 45000,
  status: "active",
  performance: "Excellent"
}
```

#### Photo Object
```javascript
{
  id: 1,
  title: "Elegant Dining Hall",
  category: "ambiance",
  src: "image-url",
  alt: "Restaurant interior",
  tags: ["Interior", "Seating", "Decor"],
  isActive: true
}
```

## Integration with Main Website

### Booking Form
- **Location**: Contact page (`/contact`)
- **Features**:
  - Tabbed interface (Table Reservation / Service Booking)
  - Comprehensive booking form with all service types
  - Form validation and success messages
  - Integration ready for backend API

### Services Available for Booking
1. Fine Dining Experience
2. Catering Services
3. Takeaway & Delivery
4. Corporate Lunch Services
5. Festival & Special Events
6. Cooking Classes & Workshops

## Future Enhancements

### Backend Integration
- Connect to real database for persistent data
- Implement proper authentication with JWT tokens
- Add email notifications for new bookings
- File upload functionality for photos

### Additional Features
- **Analytics Dashboard**: Booking trends, revenue reports
- **Customer Management**: Customer database and history
- **Inventory Management**: Stock tracking for ingredients
- **Staff Management**: Employee schedules and roles

### Security Improvements
- Role-based access control
- Two-factor authentication
- Audit logs for all admin actions
- Data encryption for sensitive information

## File Structure
```
src/
├── pages/
│   └── Admin/
│       └── Admin.jsx          # Main admin panel component
├── components/
│   └── BookingForm.jsx        # Booking form component
└── pages/
    └── Contact/
        └── Contact.jsx        # Updated contact page with booking form
```

## Usage Instructions

1. **Access Admin Panel**: Navigate to `/admin` in your browser
2. **Login**: Use the demo credentials provided
3. **Navigate**: Use the sidebar to switch between different sections
4. **Manage Bookings**: View, update status, and manage customer bookings
5. **Manage Photos**: Toggle, edit, and manage website photos
6. **Update Settings**: Modify website configuration

## Development Notes

- Currently uses mock data for demonstration
- All state management is handled with React hooks
- Styled with Tailwind CSS for consistency
- Ready for backend API integration
- Mobile-responsive design
- Accessible UI components

## Support
For technical support or feature requests, please contact the development team.




