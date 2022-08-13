import React, {FC} from "react";

const TopButtons: FC<any> = ({setQuery}: any) => {
    const cities = [
		{
			id: 1,
			title: "London",
		},
		{
			id: 2,
			title: "Sydney",
		},
		{
			id: 3,
			title: "New York",
		},
		{
			id: 4,
			title: "Paris",
		},
		{
			id: 5,
			title: "Delhi",
		},
	];

	return (
		<div className="flex items-center justify-around my-6">
			{cities.map((city) => (
				<button
					key={city.id}
					className="text-white text-lg font-medium"
					onClick={() => setQuery({ q: city.title })}
				>
					{city.title}
				</button>
			))}
		</div>
	);
};

export default TopButtons;
