const list = ["Главная", "О нас", "Продукты", "Контакты", "Новости"];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-x-11 font-bold text-lg">
        {list.map((item, index) => (
          <li key={`${item}_${index}`}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
