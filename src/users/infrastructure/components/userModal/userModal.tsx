import { ReactNode } from "react";
import Modal from "react-modal";
import type { User } from "../../../domain/user.model";
import { FaPhone, FaBaby, FaSchool, FaRegEnvelope } from "react-icons/fa";
import Divider from "../../../../config/layout/divider/divider";
import "./styles.css";
type UserModalProps = {
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  children?: ReactNode | ReactNode[];
  userData: User | undefined;
};

const UserModal = ({ isOpen, onRequestClose, children, userData }: UserModalProps) => {
  const customStyles = {
    content: {
      width: "500px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {userData && (
        <div>
          <section className="pl-2 pr-2 pt-3">
            <div className="img-name-info mb-3">
              <div className="mb-3">
                <img src={userData.image} alt="" className="avatar" />
              </div>
              <div className="text-align-center">
                <p className="fullName">{`${userData.firstName} ${userData.lastName}`}</p>
                <p>{userData.address.address}</p>
                <p>{userData.address.city}</p>
              </div>
            </div>
            <div
              className="flex"
              style={{
                justifyContent: "space-between",
              }}
            >
              <div className="flex flex-column align-items-center">
                <p className="mv-0 bold font-size-20">{userData.age}</p>
                <p className="mv-0">Age</p>
              </div>
              <div className="flex flex-column align-items-center">
                <p className="mv-0 bold font-size-20">{userData.bloodGroup}</p>
                <p className="mv-0">Blood group</p>
              </div>
              <div className="flex flex-column align-items-center">
                <p className="mv-0 bold font-size-20">{userData.eyeColor}</p>
                <p className="mv-0">Eye color</p>
              </div>
            </div>
          </section>
          <Divider />
          <section>
            <div className="flex align-items-center mb-1 info-item">
              <FaRegEnvelope size={22} color="#09f" />
              <span className="ml-1">{userData.email}</span>
            </div>
            <div className="flex align-items-center mb-1 info-item">
              <FaPhone size={22} color="#09f" />
              <span className="ml-1">{userData.phone}</span>
            </div>
            <div className="flex align-items-center mb-1 info-item">
              <FaBaby size={22} color="#09f" />
              <span className="ml-1">{userData.birthDate}</span>
            </div>
            <div className="flex align-items-center mb-1 info-item">
              <FaSchool size={22} color="#09f" />
              <span className="ml-1">{userData.university}</span>
            </div>
          </section>
        </div>
      )}
    </Modal>
  );
};

export default UserModal;
