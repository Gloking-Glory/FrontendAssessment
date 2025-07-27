export function OptionCards() {
  const options = [
    {
      title: 'Activities',
      description: 'Build, personalize, and optimize your itineraries with our trip planner.',
      variant: 'bg-slate-800',
      textColor: 'text-white',
      buttonColor: 'bg-blue-700 text-white-700'
    },
    {
      title: 'Hotels',
      description: 'Build, personalize, and optimize your itineraries with our trip planner.',
      variant: 'bg-blue-100',
      textColor: 'text-black',
      buttonColor: 'bg-blue-700 text-white-700'
    },
    {
      title: 'Flights',
      description: 'Build, personalize, and optimize your itineraries with our trip planner.',
      variant: 'bg-blue-500',
      textColor: 'text-white',
      buttonColor: 'bg-white text-blue-700'
    },
  ];

  return (
    <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-2 my-6">
        {options.map((opt) => (
            <div
                key={opt.title}
                className={`p-4 h-fit w-full rounded-md shadow-md ${opt.variant} flex flex-col justify-between`}
            >
                <h3 className={`text-lg font-bold ${opt.textColor}`}>{opt.title}</h3>
                <p className={`text-sm mt-1 mb-4 ${opt.textColor}`}>{opt.description}</p>
                <button className={`mt-6 h-12 ${opt.buttonColor} font-semibold py-1 px-3 rounded`}>
                    Add {opt.title}
                </button>
            </div>
        ))}
    </div>
  );
}
