const title = "Pasabocas y algo más con Marcela";
const email = "MARCELA.BARRERA.0126@GMAIL.COM";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en tus productos de ${title} y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "+573138982371";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Pasabocas y algo más con Marcela, ofrecemos una deliciosa variedad de pasabocas, empanadas y postres que alegran cualquier ocasión. Cada uno de nuestros productos está hecho con amor y dedicación para brindarte el mejor sabor.",
        description2: "Nuestra misión es hacer que tus celebraciones sean inolvidables, proporcionando productos de alta calidad que destacan por su frescura y sabor único. Ya sea que necesites pasabocas para una reunión o postres para una fiesta, estamos aquí para endulzar tus momentos especiales.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "La vida es más bella con un postre",
            p2: "Pasabocas deliciosos para cada ocasión",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/ana.cogua?mibextid=JRoKGi",
        instagram: "https://www.instagram.com/coguaana?igsh=dTdhOWczbHY0dGw1",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
