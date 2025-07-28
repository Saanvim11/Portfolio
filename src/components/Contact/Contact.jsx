// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [formStatus, setFormStatus] = useState({
//     submitted: false,
//     success: false,
//     message: ''
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simulating form submission
//     setTimeout(() => {
//       setFormStatus({
//         submitted: true,
//         success: true,
//         message: 'Thank you for your message! I will get back to you soon.'
//       });
      
//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//       // Reset status after 5 seconds
//       setTimeout(() => {
//         setFormStatus({
//           submitted: false,
//           success: false,
//           message: ''
//         });
//       }, 5000);
//     }, 1000);
//   };
  
//   return (
//     <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Information</h3>
//             <p className="mb-6">
//               Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
//             </p>
            
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
//                   {/* Email icon */}
//                   <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <p className="text-gray-600 dark:text-gray-400">example@yourname.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
//                   {/* Location icon */}
//                   <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
//                   {/* Social icon */}
//                   <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Connect</h4>
//                   <div className="flex space-x-4 mt-2">
//                     <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
//                       </svg>
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                       </svg>
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//               {formStatus.submitted && (
//                 <div className={`mb-4 p-4 rounded ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                   {formStatus.message}
//                 </div>
//               )}
              
//               <div className="mb-4">
//                 <label htmlFor="name" className="block mb-2 font-medium">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
//                   required
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label htmlFor="email" className="block mb-2 font-medium">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
//                   required
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label htmlFor="subject" className="block mb-2 font-medium">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
//                   required
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label htmlFor="message" className="block mb-2 font-medium">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
//                   required
//                 ></textarea>
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Contact Information</h3>
            <p><i className="fas fa-envelope"></i> your.email@example.com</p>
            <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
            <p><i className="fas fa-map-marker-alt"></i> City, Country</p>
            
            <div className="contact__social">
              <a href="https://github.com/yourusername"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/yourusername"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/yourusername"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <form className="contact__form">
            <div className="form__group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form__group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form__group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;