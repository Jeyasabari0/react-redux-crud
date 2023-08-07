import { Button, Select, TextField, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FetchUserObj, functionUpdateUser } from '../Redux/Action';

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('Staff')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { code } = useParams()
    const userobj = useSelector((state) => state.user.userobj)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userobj = { id, name, email, phone, role }
        dispatch(functionUpdateUser(userobj,id))
        navigate('/users')
        console.log(userobj);

    }

    useEffect(() => { dispatch(FetchUserObj(code)) }, [])

    useEffect(() => {
        if (userobj) {
            setId(userobj.id)
            setName(userobj.name)
            setEmail(userobj.email)
            setPhone(userobj.phone)
            setRole(userobj.role)
        }
    }, [userobj])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Typography variant='h2'>Update User</Typography>
                <TextField variant='standard' label='ID' value={id || ''} disabled />
                <TextField variant='standard' label='NAME' value={name || ''} onChange={(e) => { setName(e.target.value) }} />
                <TextField variant='standard' label='EMAIL' value={email || ''} onChange={(e) => { setEmail(e.target.value) }} />
                <TextField variant='standard' label='PHONE' value={phone || ''} onChange={(e) => { setPhone(e.target.value) }} />
                <Button variant='contained'>
                    <Select label='ROLE' value={role || ''} onChange={(e) => { setRole(e.target.value) }}>
                        <MenuItem value={'Admin'}>ADMIN</MenuItem>
                        <MenuItem value={'Staff'}>STAFF</MenuItem>
                    </Select>
                </Button>
                <div>
                    <Button variant='contained' type='submit'>UPDATE USER</Button>
                    <Button><Link to={'/users'}>BACK</Link></Button>
                </div>
            </form>
        </div >
    )
}

export default Update
