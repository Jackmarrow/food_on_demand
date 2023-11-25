import React, { useEffect, useState } from 'react'
import FlyingButton from 'react-flying-item'
import toast, { Toaster } from 'react-hot-toast'
import { axiosClient } from '../../api/axios';
import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MenuSize from './components/MenuSize';
const notify = () => toast.success('Here is your toast.');


const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [Category, setCategory] = useState([]);
  const [sizes, setSizes] = useState([]);
  console.log(sizes);
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
  }, [])

  return (
    <>
      <div>
        {
          Category.map((category, categoryId) => (
            <div key={categoryId} className='container'>
              <h1 className='text-2lg text-center font-baskerville_b text-[40px] mb-16 mt-10 text-auxiliary '>{category.type}</h1>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 place-items-center shadow-2xl'>
                {
                  menus.map((menu, id) => (
                    (menu.category_id === category.id) ? (
                      <div key={id} className='w-[300px]   mb-10 bg-gradient-to-t from-lightGreen to-white rounded-lg flex flex-col items-center gap-2'>
                        <img className='mt-[-50px] ' width={300} src={"http://localhost:8000/" + menu.image} alt="" />
                        <p className='text-center'>{menu.name}</p>
                        <p className='text-center'>{menu.desc.slice(0, 100)}...</p>
                        {
                          sizes.some(size => size.menu_id === menu.id) ? (
                            <>
                              <Dialog>
                                <DialogTrigger asChild><Button className='bg-button my-5'>Add to Cart {menu.price} $</Button></DialogTrigger>
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
                              <FlyingButton targetLeft={'90%'} src={["http://localhost:8000/" + menu.image]} ><Button onClick={notify} className='bg-button my-5'>Add to Cart {menu.price} $</Button></FlyingButton>
                            </>
                          )
                        }
                      </div>
                    ) : null
                  ))
                }
              </div>
              <Toaster />
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Menu