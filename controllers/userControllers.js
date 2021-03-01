import { createNewUser, deleteUser, editUser, findUser, showAll } from "../service/userService";



export const addUser = function (req, res, next) {
    return createNewUser(req, res, next)

};
export const find = function (req, res, next) {
    return showAll(req, res, next)
};
export const findById = function (req, res, next) {
    return findUser(req, res, next)
};
export const edit = function (req, res, next) {
    return editUser(req, res, next)
}
export const deletebyid = function (req, res, next){
    return deleteUser(req, res, next)
}
