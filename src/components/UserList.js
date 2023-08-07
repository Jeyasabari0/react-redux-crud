import React, { useEffect } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { FetchUserList, RemoveUser } from '../Redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const UserList = (props) => {

    useEffect(() => { props.loaduser() }, [])

    const handleDelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeuser(code)
            props.loaduser()
            toast.success('User Removed Successfully.')
        }
    }

    return (
        props.user.loading ? <div><h2>LOADING...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
                <div>
                    <h2> UserList </h2>
                    <Button variant='contained'><Link to={'/create'}>ADD USER</Link></Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Code</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.user.userlist && props.user.userlist.map(item =>
                                    <TableRow key={item.id}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.phone}</TableCell>
                                        <TableCell>{item.role}</TableCell>
                                        <TableCell>
                                            <Button variant='contained'><Link to={'/update/'+item.id}>EDIT USER</Link></Button>
                                            <Button variant='contained' onClick={() => { handleDelete(item.id) }}>DELETE USER</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(RemoveUser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
