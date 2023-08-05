import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal';

interface ActivityDetailProps {
  from: string;
  direction: string;
  call_type: string;
  created_at: string;
  duration: number;
  is_archived: boolean;
}

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activityDetail, setActivityDetail] = useState<ActivityDetailProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      axios.get(`${import.meta.env.VITE_DATABASE_URL_DEV}/activity/${id}`)
        .then(response => {
          console.log(response.data);
          setActivityDetail(response.data);
          setIsLoading(false);
          setIsModalOpen(true);
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!activityDetail) {
    return null;
  }

  const handleClose = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      {isModalOpen && <Modal {...activityDetail} callType={activityDetail.call_type} direction={activityDetail.direction} duration={activityDetail.duration} isArchived={activityDetail.is_archived} handleClose={handleClose} from={activityDetail.from} />}
    </>
  );
};

export default ActivityDetail;
