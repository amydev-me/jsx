import { useSelector, useDispatch } from 'react-redux'


function CarList() {

    const cars = useSelector((state) => {
        return {
            cars : state.cars.cars
        };
    });

    return (
        <div>Total Cars: {cars.length}</div>
    );
}

export default CarList;