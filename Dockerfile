# Specify global variables
ARG BASE_NODE
ARG BUILD_ENV=development

# Development stage
# Initialize a new build stage and set the base image
FROM $BASE_NODE

# Specify build and environment variables
ARG BINARY
ARG BUILD_ENV
ARG DEPENDENCY_LIST
ARG DEPENDENCY_LOCK
ARG DEPENDENCY_PATH
ARG PACKAGE_GLIBC_VERSION
ARG PACKAGE_GLIBC_NAME=glibc-$PACKAGE_GLIBC_VERSION.apk
ARG PACKAGE_GLIBC_REPO=https://github.com/sgerrand/alpine-pkg-glibc/releases/download
ARG PORT_EXPOSE
ARG WORKDIR
ENV NODE_ENV=$BUILD_ENV
ENV PATH $DEPENDENCY_PATH:$PATH

# Specify the working directory
WORKDIR $WORKDIR

# Install Wget, Bash, Curl, and Git
RUN apk --no-cache add wget bash curl git

# Install GNU C library as a Alpine Linux package
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub \
  https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
  wget $PACKAGE_GLIBC_REPO/$PACKAGE_GLIBC_VERSION/$PACKAGE_GLIBC_NAME && \
  apk --no-cache add $PACKAGE_GLIBC_NAME

# Install and update app dependencies
COPY $DEPENDENCY_LIST $DEPENDENCY_LOCK ./
RUN yarn && yarn cache clean

# Copy the entire contents from the host and add them to the container
COPY . .

# Specify network ports
EXPOSE $PORT_EXPOSE

# Specify the default executable when a container is started
ENTRYPOINT ["yarn"]

# Provide defaults for an executing container
CMD ["start"]
