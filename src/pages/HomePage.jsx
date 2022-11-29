import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/HobbyList";

HomePage.prototype = {

};

function HomePage(props) {
    //*Strict comparision: so sánh (state cũ === state mới) state cũ và state mới trong redux, nếu có sự khác nhau thì trigger rerender lại
    //Recommend sử dụng cách tách state (dưới). Nếu cả 2 cái dưới đều bị thay đổi state thì Redux tự động sắp xếp và chỉ Render lại 1 lần
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    // *Shallow comparision: so sánh từng key của state cũ === từng key của state mới, nếu khác thì mới trigger rerender lại
    // const hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId,
    // }), shallowEqual)

    const dispatch = useDispatch();

    console.log(hobbyList);
    console.log(activeId);

    const handleAddHobbyClick = () => {
        //Create object
        const newHobby = {
            id: '123',
            title: 'Test',
        }

        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div>
            <h1>Hello Redux</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;