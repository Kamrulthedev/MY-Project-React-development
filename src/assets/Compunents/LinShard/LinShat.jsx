import { LineChart, Line } from 'recharts';

const LinShat = () => {
    const Mathmarks =[
        {id: 1, name:'Student 1', mathMarks: 90 },
        {id: 2, name:'Student 2', mathMarks: 91 },
        {id: 3, name:'Student 3', mathMarks: 81 },
        {id: 4, name:'Student 4', mathMarks: 82 },
        {id: 5, name:'Student 5', mathMarks: 87 },
        {id: 6, name:'Student 6', mathMarks: 78 },
        {id: 7, name:'Student 7', mathMarks: 98 },
        {id: 8, name:'Student 8', mathMarks: 67 },
        {id: 9, name:'Student 9', mathMarks: 68 },
        {id: 10, name:'Student 10', mathMarks: 79 },
       
        
    ]

    return (
        <div>
            <LineChart width={500} height={400}>
               
            </LineChart>
        </div>
    );
};

export default LinShat;