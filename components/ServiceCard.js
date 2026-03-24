export default function ServiceCard({ icon, title, description, items }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {items && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700 flex items-start">
              <span className="text-teal-600 mr-2 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
