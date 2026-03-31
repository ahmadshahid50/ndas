import Link from 'next/link';

export default function TopNav() {
  return (
    <div className="bg-teal-600 text-white py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <Link href="tel:0424333532">
                <span className="text-sm">0466 983 171</span>
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <Link href="mailto:sovacaresydney.com.au">
                <span className="text-md">sovacaresydney.com.au</span>
              </Link>
            </div>
          </div>

          {/* Right side: Social Media Buttons (sm screen second row) */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.609.034 6.298.102 4.987.17 4.114.302 3.423.604A3.072 3.072 0 001.536.948C.833 1.251.5 1.584.197 2.287A3.072 3.072 0 00.052 3.423C-.016 4.734-.05 5.521-.05 9.142s.034 4.408.102 5.719c.068 1.311.2 2.184.502 2.875.303.691.636 1.024 1.339 1.327a3.072 3.072 0 001.887.453c1.311.068 2.098.102 5.719.102s4.408-.034 5.719-.102a3.072 3.072 0 001.887-.453c.703-.303 1.036-.636 1.339-1.327.304-.691.436-1.564.504-2.875.068-1.311.102-2.098.102-5.719s-.034-4.408-.102-5.719c-.068-1.311-.2-2.184-.502-2.875-.303-.691-.636-1.024-1.339-1.327a3.072 3.072 0 00-1.887-.453C16.408.034 15.621 0 12 0zm0 1.837c3.565 0 3.988.013 5.397.08.703.034 1.086.149 1.34.248.333.13.573.287.818.532.245.245.402.485.532.818.099.254.214.637.248 1.34.067 1.409.08 1.832.08 5.397s-.013 3.988-.08 5.397c-.034.703-.149 1.086-.248 1.34-.13.333-.287.573-.532.818a2.19 2.19 0 01-.818.532c-.254.099-.637.214-1.34.248-1.409.067-1.832.08-5.397.08s-3.988-.013-5.397-.08c-.703-.034-1.086-.149-1.34-.248a2.19 2.19 0 01-.818-.532 2.19 2.19 0 01-.532-.818c-.099-.254-.214-.637-.248-1.34C1.95 15.988 1.937 15.565 1.937 12s.013-3.988.08-5.397c.034-.703.149-1.086.248-1.34.13-.333.287-.573.532-.818a2.19 2.19 0 01.818-.532c.254-.099.637-.214 1.34-.248C8.012 1.85 8.435 1.837 12 1.837zm0 2.674a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 2.01a4.153 4.153 0 110 8.306 4.153 4.153 0 010-8.306zm6.406-.621a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}