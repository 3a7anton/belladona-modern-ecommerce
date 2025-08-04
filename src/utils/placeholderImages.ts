// Create placeholder images for the slideshow and gallery
// This creates simple colored rectangles as placeholders

export const createPlaceholderImages = () => {
  const colors = [
    '#4B0082', // Indigo
    '#9370DB', // Medium Purple
    '#BA55D3', // Medium Orchid
    '#DDA0DD', // Plum
    '#8B4513', // Saddle Brown
    '#A0522D', // Sienna
  ];

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  colors.forEach((color, index) => {
    if (ctx) {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, `${color}88`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some decorative elements
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(canvas.width * 0.3, canvas.height * 0.3, 100, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(canvas.width * 0.7, canvas.height * 0.7, 80, 0, Math.PI * 2);
      ctx.fill();
      
      // Add text
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Luxury Item', canvas.width / 2, canvas.height / 2);
      
      ctx.font = '24px Arial';
      ctx.fillText(`${index + 1}`, canvas.width / 2, canvas.height / 2 + 40);
    }
  });
};

// This is just a reference for creating actual images
// You would need to replace the image paths with actual product images
