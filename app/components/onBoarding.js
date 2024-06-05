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
  // Icon rendering logic
}

export default OnboardingSection;
