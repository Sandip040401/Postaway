// UserModel 
export default class UserModel{

    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // For signUp of Users
    static signUp(name,email,password){
        const newUser = new UserModel(users.length+1,name,email,password);
        users.push(newUser);
        return newUser;
    }

    // For signIn of Users
    static signIn(email,password){
        const user = users.find(u=>u.email == email & u.password == password);
        return user;
    }

    // return all Users
    static getAll(){
        return users;
    }

}

let users = [
    {
        id:1,
        name:'sandip',
        email:'iemsandip@gmail.com',
        password:'password'
    },
];