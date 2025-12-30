import React, { useState, useRef } from "react";
import { galleryImages as importedImages } from "../../assets/imageImports";

const Gallery = () => {
  // Gallery state management
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedImage, setSelectedImage] = useState(null);
  const lightboxRef = useRef(null);

  // Build gallery images from the new structure
  const buildGalleryImages = () => {
    let id = 1;
    const images = [];

    // Ambiance - Banquets
    Object.keys(importedImages.ambiance.banquets).forEach((location) => {
      importedImages.ambiance.banquets[location].forEach((img) => {
        images.push({
          id: id++,
          src: img.src,
          title: `Banquet Hall - ${img.location}`,
          category: "ambiance",
          subcategory: "banquets",
          location: img.location,
          date: "2025-01-01",
          tags: ["Banquet", img.location, "Elegant", "Dining"],
        });
      });
    });

    // Ambiance - Interior
    Object.keys(importedImages.ambiance.interior).forEach((location) => {
      importedImages.ambiance.interior[location].forEach((img) => {
        images.push({
          id: id++,
          src: img.src,
          title: `Interior - ${img.location}`,
          category: "ambiance",
          subcategory: "interior",
          location: img.location,
          date: "2025-01-01",
          tags: ["Interior", img.location, "Design", "Modern"],
        });
      });
    });

    // Food - Deserts
    importedImages.food.deserts.forEach((item) => {
      images.push({
        id: id++,
        src: item.src,
        title: item.title,
        category: "food",
        subcategory: "deserts",
        date: "2025-01-01",
        tags: ["Dessert", item.title, "Sweet"],
      });
    });

    // Food - Drinks
    importedImages.food.drinks.forEach((item) => {
      images.push({
        id: id++,
        src: item.src,
        title: item.title,
        category: "food",
        subcategory: "drinks",
        date: "2025-01-01",
        tags: ["Drink", item.title, "Refreshing"],
      });
    });

    // Food - Main Course
    importedImages.food.mainCourse.forEach((item) => {
      images.push({
        id: id++,
        src: item.src,
        title: item.title,
        category: "food",
        subcategory: "mainCourse",
        date: "2025-01-01",
        tags: ["Main Course", item.title, "Vegetarian"],
      });
    });

    // Food - Paneer
    importedImages.food.paneer.forEach((item) => {
      images.push({
        id: id++,
        src: item.src,
        title: item.title,
        category: "food",
        subcategory: "paneer",
        date: "2025-01-01",
        tags: ["Paneer", item.title, "Vegetarian"],
      });
    });

    // Food - Signature Dishes
    importedImages.food.signatureDishes.forEach((item) => {
      images.push({
        id: id++,
        src: item.src,
        title: item.title,
        category: "food",
        subcategory: "signatureDishes",
        date: "2025-01-01",
        tags: ["Signature", item.title, "Special"],
      });
    });

    // Events
    importedImages.events.forEach((item) => {
      images.push({
        id: id++,
        src: item.src,
        title: item.title,
        category: "events",
        date: "2025-01-01",
        tags: ["Event", item.title, "Celebration"],
      });
    });

    return images;
  };

  const galleryImages = buildGalleryImages();
  // Filter images based on category and search query
  const filteredImages = galleryImages
    .filter((image) => {
      if (activeCategory === "all") return true;
      return image.category === activeCategory;
    })
    .filter((image) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        image.title.toLowerCase().includes(query) ||
        image.category.toLowerCase().includes(query) ||
        image.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });
  // Handle image click to open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  // Handle lightbox close
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  
  // Handle image sharing
  const shareImage = async (image) => {
    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share({
          title: image.title,
          text: `Check out this ${image.category} image from Prasad Food Divine: ${image.title}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        // Copy the URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing image:', error);
    }
  };
  
  // Handle image download
  const downloadImage = async (image) => {
    try {
      // Show loading state
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Downloading...';
        downloadBtn.disabled = true;
      }
      
      // Fetch the image
      const response = await fetch(image.src);
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob);
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      // Set the download attribute with a filename based on the image title
      link.download = `${image.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      // Set the href to the blob URL
      link.href = blobUrl;
      // Append to the document
      document.body.appendChild(link);
      // Trigger the download
      link.click();
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      
      // Reset button state
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-download mr-2"></i> Download';
        downloadBtn.disabled = false;
      }
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image. Please try again.');
      
      // Reset button state on error
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-download mr-2"></i> Download';
        downloadBtn.disabled = false;
      }
    }
  };
  // Handle click outside lightbox to close
  const handleLightboxClick = (e) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox();
    }
  };
  // Navigate to next/previous image in lightbox
  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
  };
  // Handle keyboard navigation in lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  // Get category count
  const getCategoryCount = (category) => {
    if (category === "all") return galleryImages.length;
    return galleryImages.filter((img) => img.category === category).length;
  };
  // Get all unique tags
  const allTags = Array.from(new Set(galleryImages.flatMap((img) => img.tags)));
  return (
    <div className="min-h-screen bg-[#FFFDD0] text-gray-800 font-sans">
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20gallery%20of%20Indian%20restaurant%20with%20warm%20ambient%20lighting%20showcasing%20beautiful%20photographs%20of%20signature%20dishes%20and%20restaurant%20interior.%20The%20gallery%20features%20a%20sophisticated%20display%20system%20with%20brass%20frames%20against%20textured%20walls%20creating%20an%20immersive%20visual%20experience%20while%20maintaining%20a%20cohesive%20design%20that%20complements%20the%20restaurants%20maroon%20and%20gold%20color%20scheme&width=1440&height=800&seq=100&orientation=landscape')`,
              filter: "brightness(0.6)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/70 to-transparent"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 text-white">
            <h2 className="text-5xl md:text-6xl font-serif mb-6 max-w-xl leading-tight">
              Our Gallery
            </h2>
            <p className="text-xl mb-8 max-w-lg">
              A visual journey through divine dishes, serene spaces, and
              memorable moments.
            </p>
          </div>
        </div>
        {/* Category Navigation */}
        <div className="sticky top-20 bg-white shadow-md z-40">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex overflow-x-auto pb-3 md:pb-0 space-x-4 md:space-x-8">
                {["All", "Food", "Ambiance", "Events"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category.toLowerCase())}
                    className={`font-medium text-base cursor-pointer transition-colors whitespace-nowrap px-4 py-2 rounded-md !rounded-button ${
                      activeCategory === category.toLowerCase()
                        ? "text-[#800000] border-b-2 border-[#FF9933]"
                        : "text-gray-600 hover:text-[#800000]"
                    }`}
                  >
                    {category}{" "}
                    <span className="text-sm text-gray-500">
                      ({getCategoryCount(category.toLowerCase())})
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent text-sm w-full md:w-64"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                {/* <div className="relative">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent text-sm bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div> */}
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {/* {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  {tag}
                </button>
              ))} */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 py-1 bg-[#800000] text-white rounded-full text-sm transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Clear <i className="fas fa-times ml-1"></i>
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Gallery Grid */}
        <div className="py-12 bg-[#FFFDD0]">
          <div className="container mx-auto px-6">
            {filteredImages.length > 0 ? (
              <>
                <p className="text-gray-600 mb-8">
                  Showing {filteredImages.length} of {galleryImages.length}{" "}
                  images
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredImages.map((image) => (
                    <div
                      key={image.id}
                      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#800000]/80 text-white px-3 py-1 rounded-full text-xs uppercase">
                          {image.category}
                        </div>
                        {image.location && (
                          <div className="absolute top-4 right-4 bg-[#FF9933]/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {image.location}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-serif text-[#800000] mb-2">
                          {image.title}
                        </h3>
                        {image.location && (
                          <p className="text-sm text-[#FF9933] mb-1">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {image.location}
                          </p>
                        )}
                        {/* <div className="flex flex-wrap gap-2 mt-2">
                          {image.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div> */}
                      </div>
                      <div 
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(image);
                        }}
                      >
                        <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <i className="fas fa-search-plus text-3xl mb-4"></i>
                          <p className="text-lg font-medium">View Larger</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
                <h3 className="text-2xl font-serif text-[#800000] mb-2">
                  No Images Found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-6 bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Lightbox */}
        {selectedImage && (
          <div
            ref={lightboxRef}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-auto"
            onClick={handleLightboxClick}
          >
            <div className="relative w-full max-w-6xl mx-auto p-4 md:p-6">
              {/* Control buttons */}
              <div className="absolute top-4 right-4 z-10 flex space-x-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const imgElement = document.querySelector('.lightbox-image');
                    if (imgElement) {
                      if (!document.fullscreenElement) {
                        if (imgElement.requestFullscreen) {
                          imgElement.requestFullscreen();
                        } else if (imgElement.webkitRequestFullscreen) {
                          imgElement.webkitRequestFullscreen();
                        } else if (imgElement.msRequestFullscreen) {
                          imgElement.msRequestFullscreen();
                        }
                      } else {
                        if (document.exitFullscreen) {
                          document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                          document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                          document.msExitFullscreen();
                        }
                      }
                    }
                  }}
                  className="text-white bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-expand"></i>
                </button>
                <button
                  onClick={closeLightbox}
                  className="text-white bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              {/* Image */}
              <div className="w-full h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain cursor-zoom-in lightbox-image"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Toggle fullscreen mode for the image
                    const imgElement = e.target;
                    if (!document.fullscreenElement) {
                      if (imgElement.requestFullscreen) {
                        imgElement.requestFullscreen();
                      } else if (imgElement.webkitRequestFullscreen) { /* Safari */
                        imgElement.webkitRequestFullscreen();
                      } else if (imgElement.msRequestFullscreen) { /* IE11 */
                        imgElement.msRequestFullscreen();
                      }
                    } else {
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) { /* Safari */
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) { /* IE11 */
                        document.msExitFullscreen();
                      }
                    }
                  }}
                />
              </div>
              {/* Image details */}
              <div
                className="bg-white p-6 mt-4 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-serif text-[#800000] mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-500 mb-4">
                  <span className="capitalize">{selectedImage.category}</span>
                  {selectedImage.subcategory && (
                    <>
                      {" • "}
                      <span className="capitalize">{selectedImage.subcategory}</span>
                    </>
                  )}
                  {selectedImage.location && (
                    <>
                      {" • "}
                      <span className="text-[#FF9933] font-medium">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {selectedImage.location}
                      </span>
                    </>
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedImage.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        shareImage(selectedImage);
                      }}
                      className="share-btn flex items-center text-gray-600 hover:text-[#800000] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-share-alt mr-2"></i> Share
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        downloadImage(selectedImage);
                      }}
                      className="download-btn flex items-center text-gray-600 hover:text-[#800000] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-download mr-2"></i> Download
                    </button>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {filteredImages.findIndex(
                      (img) => img.id === selectedImage.id
                    ) + 1}{" "}
                    of {filteredImages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default Gallery;
