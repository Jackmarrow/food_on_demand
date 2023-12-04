import React, { useContext, useEffect, useRef, useState } from 'react'
import FlyingButton from 'react-flying-item'
import toast from 'react-hot-toast'
import axiosClient from '../../api/axios';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MenuSize from './components/MenuSize';
import { Context } from '../../App';
const notify = () => toast.success('Here is your toast.');


const Menu = () => {
  const data = useContext(Context);
  const [menus, setMenus] = useState([]);
  const [Category, setCategory] = useState([]);
  const [sizes, setSizes] = useState([]);



   //HANDLE CONNECTED USER ORDER
   const handleOrder = (dish) =>{
    data.addToBasket(dish);
    notify();
    console.log('ITEM ADDED');
};

  const getmenu = async (value) => {
    try {
      const response = await axiosClient.get('/api/menus');
      setMenus(response.data.menus);
      setCategory(response.data.categories)
      setSizes(response.data.sizes)
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  }
  useEffect(() => {
    getmenu();
  }, []);

  return (
    <>
      <div>
        {
          Category.map((category, categoryId) => (
            <div key={categoryId} className='container mt-20'>
              <h1 className='text-2lg text-center font-baskerville_b text-[40px] mb-16 mt-10 text-auxiliary '>{category.type}</h1>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 place-items-center '>
                {
                  menus.map((menu, id) => (
                    (menu.category_id === category.id) ? (
                      <motion.div initial={{ opacity: 0 }} transition={{duration:0.7}}
                        whileInView={{ opacity: 1 }}  key={id} className='w-[300px]   mb-20 bg-gradient-to-t to-[#393e46] from-[#1f2326] rounded-lg flex flex-col items-center gap-2 text-white'>
                        <img className='mt-[-80px]' width={300} src={"http://localhost:8000/" + menu.image} alt="" />
                        <p className='text-center'>{menu.name}</p>
                        <p className='text-center'>{menu.desc.slice(0, 100)}...</p>
                        {
                          menu.sizes.length > 0 || menu.ingredients.length > 0 ? (
                            <>
                              <Dialog>
                                <DialogTrigger asChild><Button className='bg-button my-5'>Add to Cart {menu.price} $ (extra) </Button></DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                      {menu.desc}
                                      <MenuSize menu={menu} sizes={sizes} />
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>
                            </>
                          ) : (
                            <>
                              <FlyingButton targetLeft={'90%'} src={["http://localhost:8000/" + menu.image]} ><Button onClick={() => handleOrder(menu)} className='bg-button my-5'>Add to Cart {menu.price} $</Button></FlyingButton>
                            </>
                          )
                        }
                      </motion.div>
                    ) : null
                  ))
                }
              </div>
            </div>
          ))
        }

      </div>
    </>
  );
};

export default Menu;
