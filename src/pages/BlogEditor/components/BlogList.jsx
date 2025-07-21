// src/components/BlogList.js
import React from "react";
import "../Blog.css";

const blogs = [
  {
    id: 1,
    title: "🌿 Green Living Tips",
    createdAt: "2025-07-20T10:00:00Z",
    content: `
      <p>Simple, everyday practices to live more sustainably at home, at work, and on the move.</p>
      <p>A lifestyle rooted in conscious choices not only supports the planet but also improves well-being, saves resources, and creates a cleaner future.</p>

      <h3>🏡 Green at Home</h3>
      <h4>💡 Save Electricity the Smart Way</h4>
      <ul>
        <li>Switch to LED bulbs and turn off appliances when not in use.</li>
        <li>Keep the home well-ventilated to reduce dependence on air conditioners.</li>
        <li>Use ceiling fans over coolers or ACs whenever possible.</li>
      </ul>

      <h4>🚿 Water-Saving Habits</h4>
      <ul>
        <li>Turn off taps while brushing or washing utensils.</li>
        <li>Use buckets for bathing instead of showers.</li>
        <li>Collect rinse water from washing vegetables for watering plants.</li>
      </ul>

      <h4>♻️ Waste Segregation & Composting</h4>
      <ul>
        <li>Separate dry and wet waste—especially important in Indian cities with doorstep pickup.</li>
        <li>Organic kitchen waste (vegetable peels, tea leaves) can be composted in balconies or gardens.</li>
        <li>Avoid throwing away old clothes—donate or recycle.</li>
      </ul>

      <h4>🧼 Natural Cleaning Alternatives</h4>
      <ul>
        <li>Use vinegar, baking soda, or lemon for basic cleaning.</li>
        <li>Soapnut (reetha) and shikakai can be used for chemical-free laundry.</li>
        <li>Avoid overuse of disinfectants in daily cleaning.</li>
      </ul>

      <h3>🏢 Sustainable Office Practices</h3>
      <h4>📄 Paper & Printing</h4>
      <ul>
        <li>Print only when absolutely necessary. Use both sides of the paper.</li>
        <li>Use recycled paper and refillable pens.</li>
        <li>Reuse printed sheets as rough paper or for note-making.</li>
      </ul>

      <h4>🔌 Conserving Energy at the Desk</h4>
      <ul>
        <li>Switch off monitors and plug points during lunch breaks and at the end of the day.</li>
        <li>Prefer laptops over desktops—they consume less power.</li>
        <li>Adjust screen brightness to reduce energy use.</li>
      </ul>

      <h4>🌱 Desk Greens</h4>
      <ul>
        <li>Keep indoor plants like money plant, aloe vera, or tulsi at the desk—they purify the air and are easy to maintain.</li>
      </ul>

      <h3>🛍️ Mindful Consumption</h3>
      <h4>👕 Clothing Choices</h4>
      <ul>
        <li>Opt for natural fabrics like cotton and khadi.</li>
        <li>Support local handloom and sustainable fashion labels.</li>
        <li>Reuse old sarees, dupattas, or shirts creatively—DIY bags, cushion covers, etc.</li>
      </ul>

      <h4>🧴 Everyday Products</h4>
      <ul>
        <li>Choose herbal or Ayurvedic personal care products that avoid harmful chemicals.</li>
        <li>Refills are better than buying small single-use items.</li>
      </ul>

      <h4>🧃 Shopping & Packaging</h4>
      <ul>
        <li>Carry cloth or jute bags when visiting the kirana or supermarket.</li>
        <li>Prefer products with minimal or recyclable packaging.</li>
        <li>Skip disposable cutlery with takeaways—use home utensils when ordering in.</li>
      </ul>

      <h3>🌿 Kitchen & Food Habits</h3>
      <ul>
        <li>Buy seasonal fruits and vegetables from local mandis—fresher and lower in carbon footprint.</li>
        <li>Soak and reuse water from washed dal, rice, or vegetables.</li>
        <li>Minimize food waste by planning meals and reusing leftovers creatively.</li>
        <li>Store grains and pulses in reused glass jars instead of plastic containers.</li>
      </ul>

      <h3>🌼 Green Corners at Home</h3>
      <ul>
        <li>Grow tulsi, coriander, or mint in small pots on windowsills or balconies.</li>
        <li>Vertical gardens are ideal for small flats or apartment spaces.</li>
        <li>Collect rainwater in buckets during monsoon for garden use.</li>
      </ul>

      <h3>🚲 Sustainable Travel & Commuting</h3>
      <ul>
        <li>Walk or cycle for short distances instead of using a bike or auto.</li>
        <li>Use carpooling apps or coordinate travel with colleagues or neighbours.</li>
        <li>For longer distances, trains or buses are more eco-friendly than flights.</li>
      </ul>

      <h3>📅 Eco-Friendly Festivals & Celebrations</h3>
      <ul>
        <li>Use diyas instead of electric lights during Diwali.</li>
        <li>Prefer natural rangoli powders and fresh flowers over plastic decor.</li>
        <li>For Holi, choose herbal or homemade colours.</li>
        <li>Avoid thermocol and plastic in decorations—use cloth, paper, and natural elements instead.</li>
      </ul>

      <h3>📚 Did You Know?</h3>
      <ul>
        <li>One hour of air conditioning uses the same electricity as running a fan for nearly 20 hours.</li>
        <li>1kg of recycled paper saves about 17 litres of water and 1.5kg of CO₂ emissions.</li>
        <li>Organic waste composting reduces the load on municipal landfills and improves soil quality.</li>
      </ul>
    `,
  },
];

export default function BlogList() {
  return (
    <div className="p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="my-8 border-b pb-4">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <p className="text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <div
            className="prose mt-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      ))}
    </div>
  );
}
