import { motion } from 'framer-motion'

function OptinPage() {
    return (
        <motion.div
            key="optin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
            {/* Left Side - Image */}
            <div className="flex-1 max-w-md">
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    src="/man-with-guitar.jpg"
                    alt="guitarist playing guitar"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-lg text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase"
                >
                    From <span className="text-c-maroon">Frustration to Flow</span>, A Guitar Book That Fixes Mistakes and Builds Strumming Confidence
                </motion.h1>

                <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://rapidgrowtheasy.com/wp-content/uploads/2025/06/GT-Ebook-UltimateBeginnerGuide.pdf.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full px-6 py-3 font-semibold rounded-lg transition-colors duration-200 shadow-lg uppercase tracking-wide text-base bg-c-yellow hover:bg-c-yellow/90 text-gray-800 cursor-pointer text-center"
                >
                    Claim Your E-book Now
                </motion.a>
            </div>
        </motion.div>
    )
}

export default OptinPage