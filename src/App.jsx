import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./assets/config/firebase";
import ContactCard from "./Components/ContactCard";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { comma } from "postcss/lib/list";
import NoFoundContact from "./Components/NoFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  let getApiData = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContacts(contactLists);
        return contactLists;
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((data) =>
        data.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow mb-9">
            <FiSearch className="text-white ml-2 text-2xl absolute" />
            <input
              onChange={filterContacts}
              type="text"
              className="bg-transparent border border-white rounded-md h-10 flex-grow pl-9 text-white "
              placeholder="Search Contact"
            />
          </div>
          <AiFillPlusCircle
            className="text-5xl cursor-pointer text-white"
            onClick={onOpen}
          />
        </div>

        <div className="mt-2 gap-2 flex flex-col">
          {contacts.length <= 0 ? (
            <NoFoundContact />
          ) : (
            contacts.map((data) => <ContactCard key={data.id} data={data} />)
          )}
        </div>
      </div>

      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
