const chatbox = document.getElementById("chat-box");
       const chatInput = document.getElementById("chat-input");

       const responses = {
        "hi" : "Hello! Welcome to Econest. How can I help you?",
        "Hi" : "Hello! How can I help you?",
        "hello" : "Hey! How can I help you?",
        "Hello" : "Hey! How can I help you?",

        "econest" : "Econest is an e-commerce site focused on sustainable home decor.",
        "Econest" : "Econest is an e-commerce site focused on sustainable home decor.",
        "What is econest?" : "Econest is an eco-friendly e-commerce store specializing in sustainable home decor.",
        "what is econest?" : "Econest is an e-commerce site focused on sustainable home decor.",
        "what is Econest?" : "Econest is an e-commerce site focused on sustainable home decor.",
        "what is econest" : "Econest is an e-commerce site focused on sustainable home decor.",

        "what product do you sell?" : "We sell eco-friendly furniture, decor items, and home essentials.",
        "product" : "We sell eco-friendly furniture, decor items, and home essentials.",
        "products" : "We sell eco-friendly furniture, decor items, and home essentials.",
        "free shipping" : "Yes! We offer free shipping on all orders above $50.",
        "free delivery" : "Yes! We offer free delevery on all orders above $50.",
        "delevery" : "Yes! We offer free delivery on all orders above $50.",
        "do you offer free shipping?" : "Yes! We offer free shipping on all orders above $50.",

        "what payment methods do you accept" : "We accept credit/debit cards, PayPal.",
        "payment" : "We accept credit/debit cards, PayPal.",
        "payment methods" : "We accept credit/debit cards, PayPal.",

        "do you have a physical store?" : "Currently, we are on online-only store, but we plan to open showrooms soon!",
        "store" : "Currently, we are on online-only store, but we plan to open showrooms soon!",

        "bye" : "Goodbye! Have a great day!"
       };
         

       function appendMessage(sender, message) {
          const messageDiv = document.createElement("div");
          messageDiv.classList.add("chat-message", sender);
          messageDiv.innerText = message;
          chatbox.appendChild(messageDiv);
          chatbox.scrollTop = chatbox.scrollHeight;
       }

       function sendMessage() {
        const text = chatInput.value.trim().toLowerCase();
        if(text === "") return;

        appendMessage("user", text);
        chatInput.value = "";

        setTimeout(() => {
            const reply = responses[text] || "I'm not sure about that. Try asking about products!";
            appendMessage("bot", reply);
        }, 500);
       }

       chatInput.addEventListener("keypress", (event) => {
        if(event.key === "Enter") sendMessage();
       });