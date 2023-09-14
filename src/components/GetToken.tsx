import { Button, Card, Typography } from "@mui/material";
import { useState } from "react";

export default function GetToken() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const handleGetToken = async () => {
    const response = await fetch('https://user-registration-api-c2252abd7f78.herokuapp.com/api/v1/token', {
      method: 'GET',
    });

    const body = await response.json()
    const token = "Bearer " + body.token
    localStorage.setItem("token", token);
    setToken(token)
  }

  return <>
    <Card style={{ padding: 16, margin: 16 }}>
      <Button type="submit" variant="contained" color="primary" onClick={handleGetToken}>
        Get token and save in localstorage
      </Button>

      <Typography>
        Token used:
        {token}
      </Typography>
    </Card>
  </>
}