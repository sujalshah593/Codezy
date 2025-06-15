import sujal from '../assets/sujal.jpg';


function About() {

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-500">
          About <span className="font-light">Cod</span>
          <span className="text-black font-light">ezy</span>
        </h1>
        <hr className="mt-3 h-0.5 bg-gray-300 border-0 w-full" />
      </div>

      {/* Description Section */}
      <div className="mb-8">
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
          <span className="text-red-500 font-bold">Codezy </span> 
          is a video-based learning app designed to help users master
          essential tech skills like{' '}
          <span className="bg-yellow-500 text-white px-1 sm:px-2 py-0.5 rounded">web development</span>,{' '}
          <span className="bg-green-500 text-white px-1 sm:px-2 py-0.5 rounded">cyber security</span>,{' '}
          <span className="bg-red-500 text-white px-1 sm:px-2 py-0.5 rounded">UI/UX design</span>,{' '}
          <span className="bg-blue-600 text-white px-1 sm:px-2 py-0.5 rounded">artificial intelligence (AI)</span>,{' '}
          <span className="bg-orange-500 text-white px-1 sm:px-2 py-0.5 rounded">Data structures and algorithms (DSA)</span>, 
          and{' '}
          <span className="bg-neutral-600 text-white px-1 sm:px-2 py-0.5 rounded">Competitive programming</span>. 
          With expert-led video tutorials covering everything from beginner basics to advanced concepts, Codezy
          offers a structured and engaging way to learn at your own pace.
          Whether you're preparing for job interviews, aiming to build
          real-world projects, or just starting your tech journey, Codezy is
          your go-to platform for practical, industry-relevant knowledge.
        </p>
      </div>

      {/* Creator Section */}
      <div className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-4">Creator</h2>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <img 
            className="w-full sm:w-64 md:w-72 h-auto rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer" 
            src={sujal} 
            alt="Sujal Shah - Creator of Codezy" 
          />
          <div className="mt-4 sm:mt-0">
            <p className="text-xl sm:text-2xl font-medium text-gray-800">Sujal Shah</p>
            <p className="text-gray-600 mt-2">Founder & Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;