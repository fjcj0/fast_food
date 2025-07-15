import { CreateUserPrams, SignInParams } from "@/type";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId: process.env.EXPO_PUBLIC_DATABASEID!,
  userCollectionId: process.env.EXPO_PUBLIC_USERCOLLECTIONID!,
  categoriesCollectionId: process.env.EXPO_PUBLIC_CATEGORIESCOLLECTIONID!,
  menuCollectionId: process.env.EXPO_PUBLIC_MENUCOLLECTIONID!,
  customizationsCollectionId: process.env.EXPO_PUBLIC_CUSTOMIZATIONSCOLLECTIONID!,
  menuCustomizationsCollectionId: process.env.EXPO_PUBLIC_MENUCUSTOMIZATIONSCOLLECTIONID!,
  platform: process.env.EXPO_PUBLIC_PLATFORM!,
  bucketId: process.env.EXPO_PUBLIC_BUCKETID!,
};
export const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);
export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);
export const createUser = async ({ email, password, name }: CreateUserPrams) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) {
      throw new Error("Failed to create account");
    }
    await signIn({ email, password });
    const avatarUrl = avatars.getInitialsURL(name);
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        email,
        name,
        accountId: newAccount.$id,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred while creating the user.");
    }
  }
};
export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred during sign-in.");
    }
  }
};
export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal('accountId', currentAccount.$id)]
        );
        if(!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (e) {
        console.log(e);
        throw new Error(e as string);
    }
}