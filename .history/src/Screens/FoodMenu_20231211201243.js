// ... (your imports)

function FoodMenu() {
  const [currentPage, setCurrentPage] = useState(1);
  const dataArray = [
    { id: 34, text: PlatterTitle, image: Platter },
    { id: 31, text: SteakTitle, image: Steak },
    { id: 21, text: PlatterTitle, image: Platter }
  ];

  const itemsPerRow = 2;

  const startIndex = (currentPage - 1) * itemsPerRow;
  const endIndex = Math.min(startIndex + itemsPerRow, dataArray.length);
  const currentItems = dataArray.slice(startIndex, endIndex);
  const totalPage = Math.ceil(dataArray.length / itemsPerRow);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  console.log("data is reachable", currentItems);

  return (
    <div className='menu_holder'>
      <div className='food_header'>
        <BottomMenu />
      </div>
      <div className='mobile-food-menu'>
        <MobileMenu />
      </div>
      <div className='food-header'>
        <img className='delights' src={OurDelights} alt="Our Delights" />
      </div>
      <div style={{ marginTop: "50px" }} className='menu_items'>
        {currentItems.map((item) =>
          item.id % 2 === 0 ? (
            <MenuItem key={item.id} meal={item.image} title={item.text} />
          ) : (
            <MenuItem2 key={item.id} meal={item.image} title={item.text} />
          )
        )}
      </div>

      <div className='footer-holder'>
        <FooterMenu />
      </div>

      <div className='footer-holder-mobile'>
        <MobileFooter />
      </div>
    </div>
  );
}

export default FoodMenu;
