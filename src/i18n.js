import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
      translation: {
        head1: "Play Parkour",
        paragraph1: "Treat your life as an adventure - all your life",
        classes: "Classes",
        prices: "Prices",
        joinUs: "Join us",
        language: "Language",
        english: 'English',
        swedish: 'Swedish',
        spanish: 'Spanish',

        head2: "How to play parkour?",
        paragraph2: "Play  with friends",
        paragraph3: "Play with  your children",
        paragraph4: "Play with Class coach",

        head3: "Why play Parkour?",
        citat1: "I get to play with grandma - Nestor 7 years",
        citat2: "I get to know my neighbours and my neighbourhood - Alice  75 years",
        citat3: "I get to discover  my neighbourhood in a new way - Ella 68 years",
        citat4: "I feel like a child again - Martha 68 years old",
        citat5: "It is social and it improves the balance and you get better at falling without hurting yourself - Sven 72 years",
        citat6: "Getting the kids from school and daycare are now an adventure and exercise for all of us, not a stressful moment - David 35 years (Allan's dad)",
        citat7: "I get to discover my neighbourhood in a new way - Ella 45 years",
        citat8: "Because it's fun and makes me stronger - Bella 35 years",
        citat9: "I get to know my neighbours and my neighbourhood - Alice 75 years",

        head4: "About us",
        paragraph5: "It started with grandma and Nestor, 9 years old,  being bored on their way home from school. Then came AuntieParkour, and today Play Parkour offers parkour programs and classes for all ages.",

        head5: "About Play Parkour",

        paragraph6: "Our Vision & Goal Our vision is to create a world where everyone has the opportunity to experience the joy of parkour. We believe that parkour is more than just a sport; it’s a way of life. Our goal is to inspire people to push their limits, overcome obstacles, and achieve their full potential through the practice of parkour.",

        head7: "Our Vision & Goal",

        head8: "Our Story",

        paragraph7: "Our story It started with grandma and 9-year-old Nestor being bored on their way home from school, then came Aunt Parkour, and today Play Parkour offers parkour programs and classes for all ages. The instructors are experienced and help students develop their strength, agility, balance, and coordination. We also have an online platform where students can learn parkour at their own pace and in the comfort of their own home.",
        
        head6: "Treat life as an adventure",
        paragraph8: "Thank you for your interest in Play Parkour. We welcome any questions, feedback, or inquiries you may have. Please fill out the form below, and we’ll get back to you as soon as possible.",

        firstname: "Name",

        email: "Email",

        Message: "Message",

        privacy: "Privacy",

        about:"About us",

        faq: "FAQ",

        contact: "Contact informataion",

        submit: "Submit",
      },
    },
    es: {
      translation: {
        head1: "Jugar al Parkour",
        paragraph1: "Trata tu vida como una aventura - toda tu vida",
        classes: "Clases",
        prices: "Precios",
        joinUs: "Únete a nosotros",
        language: "Idioma",
        english: 'Inglés',
        swedish: 'Sueco',
        spanish: 'Español',

        head2: "¿Cómo se juega al parkour?",

        paragraph2: "Juega con tus amigos",
        paragraph3: "Juega con tus hijos",
        paragraph4: "Juega con el entrenador de clase",

        head3: "¿Por qué jugar al Parkour?",
        citat1: "Consigo jugar con la abuela - Néstor 7 años",
        citat2: "Llego a conocer a mis vecinos y mi barrio - Alice 75 años",
        citat3: "Descubro mi barrio de una forma nueva - Ella 68 años",
        citat4: "Vuelvo a sentirme como una niña - Martha 68 años",
        citat5: "Es social y mejora el equilibrio y consigues caerte mejor sin hacerte daño - Sven 72 años",
        citat6: "Llevar a los niños del colegio y la guardería es ahora una aventura y un ejercicio para todos, no un momento estresante - David 35 años (padre de Allan)",
        citat7: "Descubro mi barrio de una forma nueva - Ella 45 años",
        citat8: "Porque es divertido y me hace más fuerte - Bella 35 años",
        citat9: "Conozco a mis vecinos y mi barrio - Alice 75 años",

        head4: "Sobre nosotros",
        paragraph5: "Todo empezó cuando la abuela y Néstor, de 9 años, se aburrían al volver del colegio. Luego vino AuntieParkour, y hoy Play Parkour ofrece programas y clases de parkour para todas las edades",

        head5: "Sobre Jugar al Parkour",

        paragraph6: "Nuestra visión y objetivo Nuestra visión es crear un mundo en el que todos tengan la oportunidad de experimentar la alegría del parkour. Creemos que el parkour es más que un deporte: es una forma de vida. Nuestro objetivo es inspirar a la gente para que supere sus límites, supere obstáculos y alcance todo su potencial a través de la práctica del parkour",

        head7: "Nuestra visión y objetivo",

        head8: "Nuestra historia",

        paragraph7: "Nuestra historia Empezó cuando la abuela y Néstor, de 9 años, se aburrían de camino a casa desde el colegio, luego vino la tía Parkour, y hoy Play Parkour ofrece programas y clases de parkour para todas las edades. Los instructores tienen experiencia y ayudan a los alumnos a desarrollar su fuerza, agilidad, equilibrio y coordinación. También tenemos una plataforma en línea donde los alumnos pueden aprender parkour a su propio ritmo y en la comodidad de su casa",

        head6: "Trata la vida como una aventura",
        paragraph8: "Gracias por su interés en Play Parkour. Agradecemos cualquier pregunta, comentario o consulta que pueda tener. Rellene el siguiente formulario y nos pondremos en contacto con usted lo antes posible.",

        firstname: "Nombre",

        email: "Correo electrónico",

        Message: "Mensaje",

        privacy: "privacidad",

        about:"Sobre nosotros",

        faq: "FAQ",

        contact: "Información de contacto",
        
        submit: "Enviar",
      },
    },
    sv: {
      translation: {
        head1: "Spela Parkour",
        paragraph1: "Se ditt liv som ett äventyr - hela ditt liv",
        classes: "Klasser",
        prices: "Priser",
        joinUs: "Gå med oss",
        language: "Språk",
        english: 'Engelska',
        swedish: 'Svenska',
        spanish: 'Spanska',

        head2: "Hur spelar man parkour?",

        paragraph2: "Lek med vänner",
        paragraph3: "Lek med barnen",
        paragraph4: "Lek med klassens coach",

        head3: "Varför spela Parkour?",
        citat1: "Jag får leka med mormor - Nestor 7 år",
        citat2: "Jag lär känna mina grannar och mitt område - Alice 75 år",
        citat3: "Jag får upptäcka mitt bostadsområde på ett nytt sätt - Ella 68 år",
        citat4: "Jag känner mig som ett barn igen - Martha 68 år",
        citat5: "Det är socialt och det förbättrar balansen och man blir bättre på att falla utan att göra sig illa - Sven 72 år",
        citat6: "Att hämta barnen från skolan och dagis är nu ett äventyr och motion för oss alla, inte en stressig stund - David 35 år (Allans pappa",
        citat7: "Jag får upptäcka mitt bostadsområde på ett nytt sätt - Ella 45 år",
        citat8: "För att det är roligt och gör mig starkare - Bella 35 år",
        citat9: "Jag lär känna mina grannar och mitt bostadsområde - Alice 75 år",

        head4: "Om oss",
        paragraph5: "Det började med att mormor och Nestor, 9 år gamla, hade tråkigt på väg hem från skolan. Sedan kom TantParkour, och idag erbjuder Play Parkour parkourprogram och klasser för alla åldrar.",

        head5: "Om Spela Parkour",

        paragraph6: "Vår vision & målsättning Vår vision är att skapa en värld där alla har möjlighet att uppleva glädjen med parkour. Vi tror att parkour är mer än bara en sport; det är ett sätt att leva. Vårt mål är att inspirera människor att tänja på sina gränser, övervinna hinder och uppnå sin fulla potential genom att utöva parkour.",

        head7: "Vår vision och vårt mål",

        head8: "Vår historia",
        paragraph7: "Vår historia Det började med att mormor och 9-årige Nestor hade tråkigt på väg hem från skolan, sedan kom Aunt Parkour, och idag erbjuder Play Parkour parkourprogram och klasser för alla åldrar. Instruktörerna är erfarna och hjälper eleverna att utveckla sin styrka, smidighet, balans och koordination. Vi har också en onlineplattform där eleverna kan lära sig parkour i sin egen takt och i bekvämligheten av sitt eget hem.",

        head6: "Se livet som ett äventyr",
        paragraph8: "Tack för ditt intresse för Play Parkour. Vi välkomnar alla frågor, feedback eller förfrågningar som du kan ha. Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.",

        firstname: "Namn",

        email: "E-post",

        Message: "Meddelande",

        privacy: "integritet",

        about:"Om oss",
        
        faq: "FAQ",

        contact: "Kontaktinformation",

        submit: "Skicka",

      },
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Default language
    keySeparator: false, // Remove dots as the key separator
    interpolation: {
      escapeValue: false, // Do not escape string values
    },
  });

export default i18n