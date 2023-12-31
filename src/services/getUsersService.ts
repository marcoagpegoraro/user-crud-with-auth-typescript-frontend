import Constants from "../utils/Constants"
import showNotification from "../utils/Notification"

export default async function getUsersService(token, page){
    const response = await fetch(`${Constants.API_URL}/api/v1/users?page=${page}`,{
        method: 'GET',
        headers: {authorization: token}
      })
      const body = await response.json()
      
      if(!body.success){
        showNotification("Warning", "Invalid token, please get another token", "warning")
        return 
      }

      return body.users
}