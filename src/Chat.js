// ChatbotComponent.js
import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


class ChatbotComponent extends Component {
  componentDidMount() {
    addResponseMessage("👋 Welcome to my portfolio chatbot! How can I assist you today?");
  }

  handleNewUserMessage = (newMessage) => {
    const aiResponse = this.simulateAIResponse(newMessage);
    addResponseMessage(aiResponse);
  };

  simulateAIResponse = (message) => {
    const greetings = ['hi', 'hello', 'hey'];
    const randomGreeting = greetings.find(greeting => message.toLowerCase().includes(greeting));
    
    if (randomGreeting) {
      return "Hello! How can I help you today?";
    }

    const responses = {
      'tell me about yourself': "I'm a web developer skilled in HTML, CSS, JavaScript, Bootstrap, React.js, Python, and MySQL.",
      'what are your skills?': "My skills include frontend and backend web development, UI/UX design, and project management.",
      'do you have certifications?': "Yes, I'm certified in frontend web development and Python programming.",
      'what tools do you use?': "I use CorelDRAW, Photoshop, Canva, and Visual Studio Code (VS Code) for my projects.",
      'how do you stay updated?': "I stay updated by reading blogs, taking courses, and attending webinars.",
      'what is your proudest achievement?': "My proudest achievement was...",
      'what are your career goals?': "To become a full-stack developer and work on impactful projects.",
      'why did you switch to web development?': "I switched to web development to work on more interactive and engaging projects.",
      'how do you handle deadlines?': "I manage deadlines by prioritizing tasks and maintaining effective communication.",
      'what do you enjoy about web development?': "I enjoy creating user-friendly and visually appealing websites.",
      'how do you debug?': "I use console logs and debugging tools to identify and fix issues in my code.",
      'what do you think of future web development trends?': "I believe AI and personalized user experiences will shape the future of web development.",
      'how do you collaborate in projects?': "I collaborate using Git for version control and conducting code reviews.",
      'how do you learn new languages?': "I learn new languages by practicing coding and building projects.",
      'how do you ensure website accessibility?': "I ensure website accessibility by following accessibility guidelines and using semantic HTML.",
      'any advice for new developers?': "Focus on mastering the basics and continuously learning new technologies.",
      'projects': "I've worked on e-commerce websites, social media integrations, and more. Check them out on my portfolio.",
      'technologies': "I specialize in HTML, CSS, JavaScript, Bootstrap, React.js, Python, and MySQL.",
      'experience': "I have experience with Classsic Cards as a Graphic Designer where I managed software file attachments and designed graphics using CorelDRAW and Photoshop. Previously, I worked as an ERP Executive at Sealand Knit Wears, overseeing GRN, production, and dispatch operations.",
      'contact': "You can reach out to me via email at vengadeshanvh@gmail.com or connect with me on LinkedIn at https://in.linkedin.com/in/vengadeshan-vengadeshan-88341920a.",
      'location': "I am located at 9.5.72 Ayyappan Kovil Street, Thevaram, Theni District, Uthamapalayam (TK) - 625530.",
      'freelance': "Yes, I'm open to freelance opportunities. Please feel free to reach out!",
      'yes': "Great!",
      'yeah': "Awesome!",
      'no': "Okay!",
      'default': "I don't have detailed information on that topic right now. Please ask something else!"
    };

    const response = responses[message.toLowerCase()] || responses['default'];
    return response;
  };

  render() {
    return (
      <div className="chatbot-container">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Portfolio Chatbot"
          subtitle="Ask me anything!"
        />
      </div>
    );
  }
}

export default ChatbotComponent;
