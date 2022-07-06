export const getDateFriendlyName = (dateString: string): string => {
    const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const dateArray = dateString.split('.');
    const day = dateArray[2];
    const month = parseInt(dateArray[1]);

    return `${months[month]} ${day}`; 
}