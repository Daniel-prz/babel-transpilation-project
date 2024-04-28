export default class Profile {
  constructor(UserData) {
    this.username = UserData.user;
    this.password = UserData.userkey;
  }
  displayProfile(ProfileData) {
    console.log(ProfileData.user + ProfileData.userkey);
  }
  createProfile(ProfileData) {
    const User = new Profile(ProfileData);
    this.displayProfile(User);
  }
}
