import os
from PIL import Image

src_path = r"C:\Users\USER\.gemini\antigravity\scratch\shades-by-monia\public\assets\logo-original.jpg"
out_dir = r"C:\Users\USER\.gemini\antigravity\scratch\shades-by-monia\public\assets"

img = Image.open(src_path).convert("RGBA")
width, height = img.size
print("Original dimensions:", width, height)

pixels = img.load()

# Create light image with transparency
img_light = Image.new("RGBA", (width, height))
light_pixels = img_light.load()

# Create dark image with transparency and lightened text
img_dark = Image.new("RGBA", (width, height))
dark_pixels = img_dark.load()

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        min_c = min(r, g, b)
        
        # Calculate alpha: pure white (255) -> 0; dark/gold pixels -> up to 255
        if min_c > 248:
            alpha = 0
        else:
            alpha = int(min(255, (255 - min_c) * 1.15))

        # Light version (gold brush + black typography)
        light_pixels[x, y] = (r, g, b, alpha)

        # Dark version: if it's text (low luminance and low color difference), make it warm off-white #F7F4EE
        # Gold has high R, moderate G, lower B (r - b > 40)
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        is_text = (lum < 140) and (abs(r - b) < 45)
        
        if is_text and alpha > 20:
            dark_pixels[x, y] = (247, 244, 238, alpha)
        else:
            dark_pixels[x, y] = (r, g, b, alpha)

img_light.save(os.path.join(out_dir, "logo-light.png"), "PNG")
img_dark.save(os.path.join(out_dir, "logo-dark.png"), "PNG")
print("Generated logo-light.png and logo-dark.png successfully!")
