import * as pic from './queries/profilePicture'
import * as user from './queries/user'
import * as calendar from './queries/calendar'
import {prisma} from './client'

async function main() {
    // console.log(await prisma.user.findMany({}));
    // await prisma.profilePicture.findMany().then(r => console.log(r)).catch(e => console.error(e))
    // pic.addProfilePicture("db/mockData/default-profile.jpg")
    // pic.removeProfilePicture("default-profile.jpg")
    // const picture = await pic.getProfilePicture("default-profile.jpg");
    // if (picture == null) {
    //     throw new Error("No profile picture found");
    // }
    // console.log(picture.filename);
    // const andrej = await user.addUser("andrej", "bugar", "bazinga@pes.sk", "macka", "pes", picture.id)

    // await user.removeUser("bazinga@pes.sk");
    // const andrej = await prisma.user.findUnique({ where: { email: "bazinga@pes.sk" } })
    // const andrejCalendar = await user.getUserCalendar(andrej.id)
    // console.log(andrejCalendar)
    // calendar.createEvent(andrejCalendar.id, "test event", new Date(), new Date()).then(r => { console.log(r)})
    // await prisma.user.findMany().then(r => console.log(r)).catch(e => console.error(e))
    const users = await prisma.user.findMany({});
    console.log(users);

}

main().then(() => console.log("done"))
