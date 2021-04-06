import {useRef} from 'react';

const ContactForm = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const sendMessageHandler = (event) => {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <section className="bg-gray-100 py-12 grid place-content-center min-h-cal">
      <div className="container">
        <div className="py-8 px-4 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
          <div className="grid place-content-center">
            <div>
              <h2 className="pb-2 text-gray-700 text-3xl font-bold tracking-widest">
                Get in touch
              </h2>
              <h3 className="pb-7 text-gray-400 text-base tracking-wider">
                Feel free to contact me
              </h3>
            </div>
            <form onSubmit={sendMessageHandler}>
              <div>
                <input
                  type="text"
                  ref={nameRef}
                  required
                  placeholder="Name"
                  className="bg-gray-200 rounded-full placeholder-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 pl-3 w-50"
                />
              </div>
              <div className="pt-4">
                <input
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Email"
                  className="bg-gray-200 rounded-full placeholder-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 pl-3 w-50"
                />
              </div>
              <div className="pt-4">
                <textarea
                  type="text"
                  ref={messageRef}
                  required
                  placeholder="Message"
                  rows="5"
                  className="bg-gray-200 rounded-2xl placeholder-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 pl-3 w-50"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pointer hover:bg-footer transition duration-100 text-white p-2 w-full"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex md:justify-center">
            <img src="/images/home/hero.svg" className="w-96 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
