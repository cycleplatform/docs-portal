---
sidebar_label: Configure AWS
sidebar_position: 4
---


# Configuring AWS
Use this guide to configure the assets you'll need to use AWS as a provider on Cycle.

## Generating AWS IAM User for EC2
You can use the AWS Management Console to create IAM users.

To create one or more IAM users (console)

1. Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.

2. In the navigation pane, choose Users and then choose Add users.

3. Type the user name for the new user. This is the sign-in name for AWS. If you want to add multiple users, choose Add another user for each additional user and type their user names. You can add up to 10 users at one time.

4. Select the type of access this set of users will have. You can select programmatic access, access to the AWS Management Console, or both.


:::success Access Type For Cycle
   To use the AWS provider it is required to have the following access type: **programmatic access**
:::

5. Choose Next: Permissions.

6. On the Set permissions page, specify how you want to assign permissions to this user:
:::success Attach Existing Policies Directly
For Cycle the required policy is **AmazonEC2FullAccess**.
:::

7. Select next on the Tags page unless you have a very specific need for tags.

8. Choose Next: Review to see all of the choices you made up to this point. When you are ready to proceed, choose Create user.

### Adding Security Credentials 

After creating the user, click into the user from the list of users. 

There is a horizontal navigation option on the user page called **Security Credentials**, click here and scroll down to **Access Keys**. 

Create an access key and then use those credentials in the corresponding fields on the Cycle integration form for AWS.  

Once the fields are submitted that the integration state is live, the provider can be used for provisioning servers
