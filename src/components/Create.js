import { Button, Select, TextField, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { functionAddUser } from '../Redux/Action';

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('Staff')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const userobj = { name, email, phone, role }
        dispatch(functionAddUser(userobj))
        navigate('/users')
        console.log('info', userobj);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Typography variant='h2'>Create User</Typography>
                <TextField variant='standard' label='NAME' value={name} onChange={(e) => { setName(e.target.value) }} />
                <TextField variant='standard' label='EMAIL' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <TextField variant='standard' label='PHONE' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                <Button variant='contained'>
                    <Select label='ROLE' value={role} onChange={(e) => { setRole(e.target.value) }}>
                        <MenuItem value={'Admin'}>ADMIN</MenuItem>
                        <MenuItem value={'Staff'}>STAFF</MenuItem>
                    </Select>
                </Button>
                <div>
                    <Button variant='contained' type='submit'>ADD USER</Button>
                    <Button><Link to={'/users'}>BACK</Link></Button>
                </div>
            </form>
        </div >
    )
}

export default Create
