import React from 'react'
import "./Faqs.css"

function Faqs() {
  
    const faqData = [
        {
          number: 1,
          question: 'What is Lorem Ipsum?',
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          number: 2,
          question: 'Where does it come from?',
          answer:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
        {
          number: 3,
          question: 'Why do we use it?',
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        },
        {
          number: 4,
          question: 'Where can I get some?',
          answer:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          number: 5,
          question: 'What is Lorem Ipsum?',
          answer:
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing",
        },
        {
          number: 6,
          question: 'Where does it come from?',
          answer:
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        },
        {
          number: 7,
          question: 'Why do we use it?',
          answer:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
      ];
  
    return (
    <div className='faqs-page'>

{/* start here */}
<div class="container text-grey mx-auto px-2 py-2" x-data="{
            faqs: [
                {
                    question: 'Why do I need Alpine JS?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure quas laudantium dicta impedit, est id delectus molestiae deleniti enim nobis rem et nihil.',
                    isOpen: true,
                },
                {
                    question: 'Why am I so awesome?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi cumque, nulla harum aspernatur veniam ullam provident neque temporibus autem itaque odit.',
                    isOpen: false,
                },
                {
                    question: 'Why learn on Scrimba?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi cumque, nulla harum aspernatur veniam ullam provident neque temporibus autem itaque odit.',
                    isOpen: false,
                },
            ]
        }">
  <h2 class="text-2xl font-bold">FAQs</h2>
  <div class="leading-loose text-lg mt-6">
    <template x-for="(faq, index) in faqs" :key="faq.question"/</div>>
      <div>
        <button class="w-full font-bold py-3 flex justify-between items-center mt-4" :class="index !== faqs.length - 1 && 'border-b border-gray-400'" @click="faqs = faqs.map(f => ({ ...f, isOpen: f.question !== faq.question ? false : !f.isOpen}))">
          <!-- Specs has it that only one component can be open at a time and also you should be able to toggle the open state of the active component too -->
          <div x-text="faq.question"></div>
          <svg x-show="!faq.isOpen" class="fill-current" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z" />
          </svg>
          <svg x-show="faq.isOpen" class="fill-current" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" />
          </svg>
        </button>

        <div class="text-gray-700 text-sm mt-2" x-text="faq.answer" x-show="faq.isOpen"></div>
      </div>
    </template>
  </div>
</div>

        {/* end here */}
    </div>
  )
}

export default Faqs