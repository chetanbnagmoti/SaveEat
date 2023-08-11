import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import PreNav from './component/Pre-nav/PreNav';

import Orders from './component/Orders/Orders';
import MenuPage from './component/Menu/MenuPage';
import Editmenu from './component/editMenu/editmenu';
import UpdateItem from './component/updateItem/UpdateItem';
import AddItem from './component/Add_new_Item/Add_newItem';
import Ongoing_discount from './page/discount/Ongoing_discount';
import Category from './page/category/Category';
import Setting from './page/setting/Setting';
import BrandSetting from './page/BrandSetting/BrandSetting';
import Choice from './page/Choice/Choice';
import User from './page/User_setting/UserSetting';
import Addrole from './page/User_setting/AddRole_modal';
import { SignIn } from './page/SignIn/SignIn';
import { SignUp_page } from './page/SignUp/Signup';
import Private from './component/Private/PrivateRoute';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/home" element={<Private><Orders/></Private>} />
        <Route path="/signup" element={<SignUp_page/>} />
        <Route path="/menu" element={<Private><MenuPage/></Private>} />
        <Route path="/editmenu/:id" element={<Private><Editmenu/></Private>} />
        <Route path="/addItem" element={<Private><AddItem/></Private>} />
        <Route path="/discount" element={<Private><Ongoing_discount/></Private>} />
        <Route path="/category" element={<Private><Category/></Private>} />
        <Route  path="/setting" element={<Private><Setting/></Private>} />
        <Route  path="/brand_setting" element={<Private><BrandSetting/></Private>} />
        <Route  path="/user_setting" element={<Private><User/></Private>} />
        <Route  path="/choice" element={<Private><Choice/></Private>} />
        <Route  path="/addRole/:text" element={<Private><Addrole/></Private>} />
      </Routes>



    </div>
  );
}

export default App;
