import React from 'react';

function OnboardingSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 w-full text-center">Onboarding Process</h1>
        <OnboardingStep
          stepNumber="1"
          title="Make a Call"
          description="We reach out to you to discuss our dispatch services."
        />
        <OnboardingStep
          stepNumber="2"
          title="Mutual Agreement"
          description="Upon agreement, we proceed to the onboarding process."
        />
        <OnboardingStep
          stepNumber="3"
          title="Document Submission"
          description="You provide necessary documents: W9 form, MC authorization letter, CYI, bank cheque."
        />
        <OnboardingStep
          stepNumber="4"
          title="Confirm RPM"
          description="You confirm the Rate Per Mile (RPM) provided by us."
        />
        <OnboardingStep
          stepNumber="5"
          title="Assign a Dispatcher"
          description="Once confirmed, we assign a dispatcher to manage your loads."
        />
        <OnboardingStep
          stepNumber="6"
          title="Weekly Payment Collection"
          description="You make weekly payments to us for our dispatch services."
        />
      </div>
    </section>
  );
}

function OnboardingStep({ stepNumber, title, description }) {
  return (
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{stepNumber}</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          {renderIcon(stepNumber)}
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{title}</h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function renderIcon(stepNumber) {
  switch (stepNumber) {
    case "1":
      return (
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case "2":
      return (
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      );
    case "3":
      return (
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
      );
    case "5":
      return (
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );
      case "6":
      return(
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
      );
      case "4":
      return(
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>)
    default:
      return null;
  }
}

export default OnboardingSection;


