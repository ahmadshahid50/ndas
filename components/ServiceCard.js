import Link from 'next/link';

export default function ServiceCard({ icon: Icon, title, description, items, moreHref, newitems }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      {Icon && (
        <div className="bg-blue-100 p-3 rounded-full mb-4 inline-flex items-center justify-center w-12 h-12">
          <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
        </div>
      )}
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

      {newitems && (
        <ul className="space-y-2 mt-2">
          {newitems.map((item, index) => (
            <li key={index} className="text-gray-700 flex items-start ">
              <span className="text-teal-600 mr-2 font-bold">•</span>
              {typeof item === 'object' && item.href ? (
                <Link href={item.href} className="text-gray-700 hover:text-teal-700 hover:underline transition">
                  {item.text}
                </Link>
              ) : (
                <span>{typeof item === 'string' ? item : item.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}


      {/* {moreHref && (
        
        <div className="mt-4">
          <Link
            href={moreHref}
            className="text-sm text-teal-600 font-medium hover:text-teal-700 transition"
          >
           And More
          </Link>
        </div>
      )} */}
    </div>
  );
}
