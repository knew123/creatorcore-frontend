export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">My Creator Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ToolCard title="Script Generator" desc="Use AI to create viral YouTube scripts." />
        <ToolCard title="Video Generator" desc="Turn your scripts into videos using avatars and voice." />
        <ToolCard title="SEO & Title Tool" desc="Generate titles, tags, and descriptions with AI." />
        <ToolCard title="Thumbnail Maker" desc="Design eye-catching thumbnails instantly." />
      </div>
    </div>
  );
}

function ToolCard({ title, desc }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{desc}</p>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold hover:bg-yellow-300">Open</button>
    </div>
  );
}
