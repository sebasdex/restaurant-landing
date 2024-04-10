function OfferedMenu() {
  const menu = [
    {
      id: 1,
      title: "snacks",
      food: "Jumbo Shrimp",
      active: true,
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      src: "",
    },
    {
      id: 2,
      title: "desert",
      food: "Jumbo Shrimp",
      active: false,
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      src: "",
    },
    {
      id: 3,
      title: "dinner",
      food: "Jumbo Shrimp",
      active: false,
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      src: "",
    },
    {
      id: 4,
      title: "freshfood",
      food: "Jumbo Shrimp",
      active: false,
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      src: "",
    },
    {
      id: 5,
      title: "luntch",
      food: "Jumbo Shrimp",
      active: false,
      price: "$25.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      src: "",
    },
  ];
  const handleClick = () => {};
  return (
    <section className="flex flex-col justify-center items-center text-center gap-5 min-h-screen min-w-96">
      <div>
        <p className="text-3xl font-dynalight text-orange-300 md:text-4xl">
          Tasty and Delicious
        </p>
        <h1 className="text-4xl font-bold uppercase md:text-5xl">
          Offerd Menu
        </h1>
      </div>
      <ul className="flex border min-w-80 uppercase text-sm">
        {menu.map((item) => (
          <li
            className={` ${item.active ? "bg-amber-500 text-black" : ""}
           p-2 cursor-pointer hover:bg-amber-500 hover:text-black`}
            key={item.id}
            onClick={handleClick}
          >
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      <article className="border min-w-80 grid grid-cols-2">
        {menu.map((item) => (
          <div className="border">
            <p>{item.food}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default OfferedMenu;
