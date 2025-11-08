import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "O que está incluso na inscrição?",
    answer:
      "O valor da inscrição inclui o Kit Inpactado e a participação nos 2 dias de evento presencial.",
  },
  {
    question: "Até quando posso me inscrever?",
    answer:
      "Enquanto durarem os ingressos até a data da conferência (do evento presencial).",
  },
  {
    question: "Posso parcelar o valor da inscrição?",
    answer: "SIM! Parcelamos o valor do ingresso em até 6x sem juros.",
  },
  {
    question: "Como cancelar minha inscrição?",
    answer:
      "De acordo com o art. 49 da Lei 8.078/09, o participante poderá solicitar estorno e cancelamento do seu ingresso em até 7 corridos após a compra. Após isso, poderá ser realizado o pedido de cancelamento sem reembolso. Para cancelar a sua inscrição, entre em contato conosco em conferenciainpacto@gmail.com.",
  },
  {
    question: "Posso transferir minha inscrição?",
    answer: "Não é permitida a transferência de inscrição.",
  },
  {
    question: "Terá refeição no local?",
    answer: "Teremos opções de restaurantes e refeições pagas no local!",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-inpacto-pink sm:py-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900 sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-300 sm:h-6 sm:w-6 ${
            isOpen ? "rotate-180 text-inpacto-pink" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] pb-5 sm:pb-6" : "max-h-0"
        }`}
      >
        <div className="whitespace-pre-line text-sm leading-relaxed text-gray-700 sm:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-inpacto-sky/10 px-4 py-8 sm:px-6 sm:py-10 lg:h-[50rem] lg:px-8 lg:py-0 lg:flex lg:items-center">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="mb-3 block bg-gradient-to-r from-[#FA1462] via-[#E23973] to-[#6F00FF] bg-clip-text text-4xl font-bold leading-tight text-transparent sm:mb-4 sm:text-5xl md:text-6xl">
            FAQ
          </h1>
          <p className="text-base text-gray-600 sm:text-lg">
            Perguntas Frequentes
          </p>
        </div>

        {/* FAQ Items */}
        <div className="rounded-2xl bg-white shadow-xl">
          <div className="divide-y divide-gray-200 px-6 py-2 sm:px-8">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center sm:mt-8">
          <p className="text-sm text-gray-600 sm:text-base">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="mailto:conferenciainpacto@gmail.com"
            className="group relative mt-2 inline-block text-base font-semibold text-inpacto-pink transition-colors hover:text-inpacto-magenta sm:text-lg"
          >
            <span className="relative">
              Entre em contato conosco →
              <span className="absolute bottom-0 left-0 h-[0.10px] w-0 bg-inpacto-magenta transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
