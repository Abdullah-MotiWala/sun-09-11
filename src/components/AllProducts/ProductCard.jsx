import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductCard = ({ item, setItems, items }) => {
    // const { item, setItems, items } = props
    const [tempWeight, setTempWeight] = useState(0)
    const weightHandler = (isAddType) => {
        if (isAddType)
            setTempWeight(prev => Number(prev) + 1)
        else
            setTempWeight(prev => Number(prev) - 1)

        // // : use to rename variable
        // let { weight: itemWeight } = item
        // // both can be corret way todo line: 9,11
        // if (isAddType) {
        //     itemWeight += 1
        // } else {
        //     itemWeight--
        // }
        // let temp = { ...item, weight: itemWeight }
        // let otherItems = items.filter((x) => x.id != item.id)
        // setItems([...otherItems, temp])
    }

    useEffect(() => {
        setTempWeight(item.weight)
    }, [item])
    return (
        <Card sx={{ minWidth: 275, margin: "1rem" }}>
            <CardContent sx={{ borderBottom: "0.5px solid grey", marginBottom: "12px" }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.title}
                </Typography>
                <Typography variant="body2">
                    {item.desc}
                </Typography>
            </CardContent>

            <Typography>
                <Button size="small" variant='outlined' onClick={() => weightHandler(1)}>+</Button>   {tempWeight} <Button size="small" variant='outlined' onClick={() => weightHandler(0)}>-</Button>
            </Typography>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small" color="warning">Delete</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
