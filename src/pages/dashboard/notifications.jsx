import React, { useState } from "react";
import { Typography, Alert, Card, CardHeader, CardBody, } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import NoData from "@/components/NoData";

export function Notifications() {
  const [showAlerts, setShowAlerts] = useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
         <NoData/>
        </CardBody>
      </Card>
     
    </div>
  );
}

export default Notifications;
