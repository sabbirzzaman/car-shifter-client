import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  // get user orders data
  const { data: users } = useQuery(["user", user], () =>
    axios.get(`https://white-rabbit-tutu.cyclic.app/user/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  useEffect(() => {
    if (users?.data.role) {
      setAdmin(true);
      setAdminLoading(false);
    }
  }, [users?.data.role]);

  return [admin, adminLoading];
};

export default useAdmin;
