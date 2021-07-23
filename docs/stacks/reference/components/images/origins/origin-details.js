// All array items are ordered as follows
// Field | type | required | Nullable | description
// 0     | 1    | 2        | 3        | 4

export const Details = {
    dockerhub: [
      ["target", "String", "✅", "❌", "The name and tag of the image as listed on Docker Hub, separated by a colon." ],
      ["username", "String", "❌", "❌", "A private DockerHub repo's username, for auth."],
      ["token", "String", "❌", "❌", "A private DockerHub token, for auth."]
    ],
    dockerregistry: [
        ["url", "String", "✅", "❌", "The url of the Docker registry." ],
        ["username", "String", "❌", "❌", "A private Docker registries username, for auth."],
        ["token", "String", "❌", "❌", "A private Docker registry token, for auth."],
        ["password", "String", "❌", "❌", "A private Docker registry password, for auth."],
        ["target", "String", "✅", "❌", "The name and tag of the image as listed on Docker Hub, separated by a colon." ],
    ],
    dockerfile: {
        shared: [
            [`repo`, "Object", "❌", "✅", "An object holding information about the remote repository for the image."],
            [`targz_url`, "String", "❌", "✅", "A url that serves a tar.gz package of image files, for this image."],
            [`context_dir`, "String", "❌", "✅", "The full path to the directory that should be treated as the root context when copying files from source to the image."],
            [`build_file`, "String", "❌", "✅", "An object holding remote repository information. If an image uses repo, it cannot use targz_url."],
            [`credentials`, "Array", "❌", "✅", "An array of credentials objects to be used when parent images referenced in Dockerfiles or submodules require authentication."]
        ],
        repo: [
            ["url", "String", "✅", "❌", "The url of the remote git repository." ],
            ["auth", "Object", "❌", "✅", "An object holding authentication type and credentials for the remote git repository."],
            ["branch", "String", "❌", "✅", "A branch to use when pulling files from the repo."],
            ["ref", "Object", "❌", "✅", "An object holding a reference type of hash or tag and its corresponding value."],
            ["credentials", "String", "❌", "✅", "A branch to use when pulling files from the repo."],
        ],
        ref: {
            hash: [
                ["type", "String", "✅", "❌", "The protocol to be used for authentication - either http or ssh."],
                ["credentials", "Object", "✅", "❌", "The corresponding credentials to use for the given auth type."]
            ],
            tag: [
                ["type", "String", "✅", "❌", "The protocol to be used for authentication - either http or ssh."],
                ["credentials", "Object", "✅", "❌", "The corresponding credentials to use for the given auth type."]
            ]
        },
        repoauth: {
            shared: [
                ["type", "String", "✅", "❌", "The protocol to be used for authentication - either http or ssh."],
                ["credentials", "Object", "✅", "❌", "The corresponding credentials to use for the given auth type."],
            ],
            credentials: {
                http: [
                    ["username", "String", "✅", "❌", "The username for the remote repository http authentication."],
                    ["password", "String", "✅", "❌", "The password for the remote repository http authentication."],
                ],
                ssh: [
                    ["username", "String", "✅", "❌", "The username for the remote repository ssh authentication."],
                    ["passphrase", "String", "❌", "❌", "The passphrase for the SSH key provided, if one was set during key create."],
                    ["private_key", "String", "✅", "❌", "A private ssh key that works with the public key on the remote repository."],
                ]
            }
        },
        registrycredentials: [
            ["url", "String", "❌", "✅", "The url of the Docker registry." ],
            ["username", "String", "❌", "✅", "A private Docker registries username, for auth."],
            ["token", "String", "❌", "✅", "A private Docker registry token, for auth."],
        ]
    }
}

export const DetailExamples = {
    base: `{
    "type": "docker-file",
    details: {
      "context_dir": "/",
      "build_file": "/Dockerfile"
  }`,
    fullrepo: `{
    "type": "docker-file",
    "details": {
      "repo": {
        "url": "repo.com/url",
        "auth": {
          "type": "http",
          "credentials": {
            "username": "demouser",
            "password": "demouserpassword"
          },
          "branch": "development",
          "reference": {
            "type": "hash",
            "value": "9172aaaa779fcb500033a831c07f5b17098d28f7"
          }
        },
      "context_dir": "/target/directory",
      "build_file": "/target/directory/Dockerfile",
      "credentials": [
        {
          url: "privateregistry.io",
          username: "username",
          token: "1231-4562-7556"
        },
        {
          url: "privateregistry2.io",
          username: "username2",
          token: "1231-3362-7556"
        }
      ],
    }
  }
}`,
    fulltargz: `{
    "type": "docker-file",
    "details": {
      "targz_url": "https://yoururl.com/endpoint",
      "context_dir": "/target/directory",
      "build_file": "/target/directory/Dockerfile",
      credentials: [
        {
          url: "privateregistry.io",
          username: "username",
          token: "1231-4562-7556"
        },
        {
          url: "privateregistry2.io",
          username: "username2",
          token: "1231-3362-7556"
        }
      ],
    }
  }
}`,
    minimum: `{
    "type": "docker-file",
    "details": {}
}`

}


export const repo = {
    base: `{
    "url": "repo.com/url",
    "auth": { ...auth },
    "branch": "branch",
    "reference": { ...reference },
    
}`,
    minimum: `{
    "url": "repo.com/url"
}`,
    fullhttphash: `{
    "url": "repo.com/url",
    "auth": {
      "type": "http",
      "credentials": {
        "username": "demouser",
        "password": "demouserpassword"
    },
    "branch": "development",
    "reference": {
      "type": "hash",
      "value": "9172aaaa779fcb500033a831c07f5b17098d28f7"
    }
  }
}`,
    fullsshtag:`{
    "url": "repo.com/url",
    "auth": {
      "type": "ssh",
      "credentials": {
        "username": "git",
        "password": "somepassphrase",
        "private_key": "-----BEGIN OPENSSH PRIVATE KEY---\\r\\n....."
    },
    "branch": "development",
    "reference": {
      "type": "tag",
      "value": "v2021.08.02.35"
    }
  }
}`,
    auth: {
        http: `{
    "username": "demousername",
    "password": "userspassword"
}`,
        ssh: `{
    "username": "git",
    "password": "somepassphrase",
    "private_key": "-----BEGIN OPENSSH PRIVATE KEY---\\r\\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn\\r\\nNhAAAAAwEAAQAAAYEA2DE0SHD8ulSFgMQKguxZi18TfbOBUm+htRSDdOttpeNiTUitPkHz\\r\\ninY\\/ZCUEPHcSMMnoh9viFrgpsGNd7mi+3Fb+YP1dB7sSsb4EV5a9LHAfgEEF0dDQ7aKJmf\\r\\nFQ\\/\\/cPfowvGAyHjwbPZLNxtuH7LxbikhajtYXnlc72DnlILvzUbX6yCGposeugU7aYf2gj\\r\\n\\/mZrikxAgDQXeVx5cVvz3VPh8xE\\/pe1ADSKQjw0\\/C+ftUuzV1wM\\/XM5B5JF8kqLMbxG6N6\\r\\nh6rMgDbOtfV9khlFeur8w2e2CvkvrySfl6QteP1l5X+JDUxg+3+NdlFGIqxF+cuxRb30So\\r\\nlZDtlfS2DYsFQyzlM6liXQUfZAbqjXQ\\/aPLboVMf9K0330KuUdd4RyGUcO0tlICLpeyrDb\\r\\npVE6e0+SJZCYub6ZLwcXqC+DGFU1IpiQFKp0j\\/t8OINWHEYubYjzsfZ6PzOz6aNqsmYEkt\\r\\ntG1ii6KgaO5z+YEFmfKgXMw418kwVr5TQS8hhRaxAAAFiAlE6O4JROjuAAAAB3NzaC1yc2\\r\\nEAAAGBANgxNEhw\\/LpUhYDECoLsWYtfE32zgVJvobUUg3TrbaXjYk1IrT5B84p2P2QlBDx3\\r\\nEjDJ6Ifb4ha4KbBjXe5ovtxW\\/mD9XQe7ErG+BFeWvSxwH4BBBdHQ0O2iiZnxUP\\/3D36MLx\\r\\ngMh48Gz2Szcbbh+y8W4pIWo7WF55XO9g55SC781G1+sghqaLHroFO2mH9oI\\/5ma4pMQIA0\\r\\nF3lceXFb891T4fMRP6XtQA0ikI8NPwvn7VLs1dcDP1zOQeSRfJKizG8RujeoeqzIA2zrX1\\r\\nfZIZRXrq\\/MNntgr5L68kn5ekLXj9ZeV\\/iQ1MYPt\\/jXZRRiKsRfnLsUW99EqJWQ7ZX0tg2L\\r\\nBUMs5TOpYl0FH2QG6o10P2jy26FTH\\/StN99CrlHXeEchlHDtLZSAi6Xsqw26VROntPkiWQ\\r\\nmLm+mS8HF6gvgxhVNSKYkBSqdI\\/7fDiDVhxGLm2I87H2ej8zs+mjarJmBJLbRtYouioGju\\r\\nc\\/mBBZnyoFzMONfJMFa+U0EvIYUWsQAAAAMBAAEAAAGBAKXNpsFgFhN5OyI0N7ONPGeNNU\\r\\n+UWbw1bRmJcAA9hsxRBVUsReGXhwZMBfXyBbuxvju4viNj2ZN\\/Dkn\\/C00K\\/EXUWidcaPrC\\r\\n2GWEy6O5McBhBWfBdosh0PpPS6TK1Epa2oE9VejlwxlIKcqbbLzLt2636HAN+OQAnEnifg\\r\\nc\\/sMKImQqYvkWCBmVdxootYetknSZAun1IWbd5O\\/+RknoEAZVe\\/c0DD4Nb32GzfpaXnCCv\\r\\ncO3GQYIzNWchsJtxkM6NFz+nPbzja\\/rD+AfvkZeRZN5XeP2LiY6CzZKjm2xmvu4dYpFKVt\\r\\nbR6HP\\/Jmh28DzXam4B9c9hMRTl1pqGqficZaWlBjvbZW5VFlV2u\\/3zduxI+ERP1yBEidFW\\r\\nz263V1ml\\/meMuEfKMLTZuAf\\/puzHGL9uCophasNNWCMYjkSP+Kl3gy2OBUWEyzmeZ7Lynd\\r\\nsIJbJUAyJ7al+pGElm5SDg+LiUyofcCWsL6FKGpxHIGsJGyobyPP4wPwtND\\/owSqjZoQAA\\r\\nAMAynJD7SdLuUu\\/TzPt+CYNVap19jzsfBEoK7gFmd\\/zAOoIJ4+LGFD10kJM9M87ywSZnWz\\r\\nHnMwGVD\\/PSAGJOMNpgSNZj5k0YScV27ML5nQx9a0woyJsIpyWrZVsPSq6PpY1Mm6Ib\\/UFu\\r\\n5Xb3auklurarv8yrk4W1HiM3vRk6Cyzk5tHsek6ERRifjkByR8GRna4Flh9crML439CDHX\\r\\njN5CsgAknBs\\/QYm\\/oYpdyTLZc4Q9cOZaM\\/7ATeF8FcL8UYtYoAAADBAPFXcMHwhyuiXVzb\\r\\nCsKzbe1JYpXKi1CudzaSMXIrxVdL8HXsno2vwNES12PN4S8J3oSmLd9Svy96OlMiNF3GQb\\r\\nEgH4YHZY4+1IGw6anWsqXfyKuClUIQ0WkpfloP2UlrbEBOje40\\/YDIYQXDX+ba6usshXsW\\r\\nN1JUF4HOa6VxalHINHGg81q0dCdUWW8BjxNVod1SxM95ZdhHZqZ4lIsf94XeiGLv+hzXO0\\r\\nvEaw+fkAkMg3NDunqj6sLw1jhbN7TstQAAAMEA5VK5ALBRJi5Iauj9+FwlpGfUtY21bKm0\\r\\nJtJRIu3UG25c9N5vbRiZR6y03PfeUD6+SoUqmepBG8ZBuMOYjf3fi1\\/drT8+bC9lox0c+w\\r\\nIzcbNtqD1a1iN7Tj0jPU7A27yXovrBDj5Fk2BAYCE7MolKCXqyW5YVUzl0nSRbk4TY6ktN\\r\\niPNRkJnIqg8RIo5nhvdcUXmvtCbAW\\/PM5Z5ku5joDFqYn1qAh2DV\\/\\/bhMZlGKmx7Bxx5mC\\r\\nZ\\/gs+UkcPirTuNAAAAEXJvb3RAZTc5Mjg0OWFkMGJmAQ==\\r\\n-----END OPENSSH PRIVATE KEY-----"
}`
    },
    reference: {
        hash: `{
    "type": "hash",
    "value": "9172aaaa779fcb500033a831c07f5b17098d28f7"
}`,
        tag: `{
    "type": "tag",
    "value": "v2021.08.02.44"
}`
    }
}