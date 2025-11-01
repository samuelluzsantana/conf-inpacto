import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "O que está incluso na inscrição?",
    answer:
      "O valor da inscrição inclui o Kit Inpactado e a participação nos 3 dias de evento presencial.",
  },
  {
    question: "Até quando posso me inscrever?",
    answer:
      "Enquanto durarem os ingressos até a data da conferência (do evento presencial).",
  },
  {
    question: "Posso parcelar o valor da inscrição?",
    answer: "Sim! Parcelamos em até 4x sem juros.",
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
    question: "Tem desconto para caravana?",
    answer:
      'Sim! Forme uma caravana e ganhe desconto por pessoa:\n\n5 pessoas = R$ 15 OFF\n10 pessoas = R$ 25 OFF\n15 ou mais = R$ 30 OFF\n\nO líder da caravana deve enviar um e-mail para conferenciainpacto@gmail.com com o assunto "CARAVANA - Nome do Líder" e colocar no corpo do e-mail nome completo + CPF de todos os participantes. Você receberá um cupom exclusivo para usar no momento da inscrição.\n\n*Ninguém do grupo pode se inscrever individualmente antes de receber o cupom.',
  },
  {
    question: "O prazo de pagamento da minha inscrição passou, o que fazer?",
    answer:
      "Entre em contato conosco via conferenciainpacto@gmail.com e iremos gerar um novo pagamento para você!",
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
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-blue-600 sm:py-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900 sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-300 sm:h-6 sm:w-6 ${
            isOpen ? "rotate-180 text-blue-600" : ""
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
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 sm:mb-4 sm:text-5xl md:text-6xl">
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
        <div className="mt-8 text-center sm:mt-12">
          <p className="text-sm text-gray-600 sm:text-base">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="mailto:conferenciainpacto@gmail.com"
            className="mt-2 inline-block text-base font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline sm:text-lg"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
}
